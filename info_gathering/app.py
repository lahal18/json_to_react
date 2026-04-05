import os
import re
import json
import logging
from flask import Flask, render_template, request, jsonify, Response
import requests
from openai import OpenAI
from json_repair import repair_json

import subprocess
import shutil

# --- Paths for the Generator Integration ---
# BASE_DIR is already defined in your code as info_gathering


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# ==========================================
# 1. API CONFIGURATION
# ==========================================
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")
GROQ_API_KEY   = os.environ.get("GROQ_API_KEY",   "")
NVIDIA_API_KEY = os.environ.get("NVIDIA_API_KEY",  "")

GEMINI_URL = (
    "https://generativelanguage.googleapis.com/v1beta/models/"
    f"gemini-2.0-flash:generateContent?key={GEMINI_API_KEY}"
)

# Groq — interview/chat (ultra-fast, low latency)
groq_client = OpenAI(
    base_url="https://api.groq.com/openai/v1",
    api_key=GROQ_API_KEY,
)
GROQ_MODEL = "llama-3.3-70b-versatile"

# NVIDIA — segmented JSON generation
# thinking=False, stream=False: deterministic, complete, no cut-off
nvidia_client = OpenAI(
    base_url="https://integrate.api.nvidia.com/v1",
    api_key=NVIDIA_API_KEY,
)
NVIDIA_MODEL      = "nvidia/nemotron-3-nano-30b-a3b"
NVIDIA_MAX_TOKENS = 4096   # small enough per segment, large enough for detail

# ==========================================
# 2. LOAD COMPONENT RULES
# ==========================================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
METADATA_PATH = os.path.abspath(
    os.path.join(BASE_DIR, "..", "generator", "config", "component_metadata.json")
)

GEN_DIR = os.path.abspath(os.path.join(BASE_DIR, "..", "generator"))
SITE_DIR = os.path.join(GEN_DIR, "component_library")
TARGET_JSON = os.path.join(GEN_DIR, "layout.json")
SOURCE_JSON = os.path.join(BASE_DIR, "generated_layout.json")

try:
    with open(METADATA_PATH, "r") as f:
        COMPONENT_RULES = f.read()
        # Parse it into a dict to get the keys for our Auto-Heal Validator!
        rules_dict = json.loads(COMPONENT_RULES)
        ALLOWED_COMPONENT_KEYS = list(rules_dict.keys())
except Exception as e:
    COMPONENT_RULES = "{}"
    ALLOWED_COMPONENT_KEYS = []
    logger.warning("Could not load component metadata: %s", e)

# ==========================================
# 3. PROMPTS
# ==========================================

# ==========================================
# 3. PROMPTS
# ==========================================

INTERVIEWER_PROMPT = """
You are an expert Website Requirement Assistant — conversational, warm, and precise.

Your goal is to gather enough information to design a website. Ask only 1-2 short,
clear questions at a time. Never overwhelm the user. Be natural and conversational.

Topics to cover (not necessarily in order):
- What type of website (portfolio, SaaS, e-commerce, landing page, blog, etc.)
- Key pages they need
- Must-have features and functionality
- Preferred design style (minimal, bold, corporate, playful, etc.)
- Target audience

Once you have a clear picture (typically after 4-6 exchanges), output a final summary
using EXACTLY this format — no extra text after the closing tag:

[FINAL SUMMARY]
**Website Type:** ...
**Pages Needed:** ...
**Key Features:** ...
**Design Style:** ...
**Target Audience:** ...
[/FINAL SUMMARY]

CRITICAL REVISION RULE: If the user asks to change anything after a summary has been
shown, gather the new info and output a fresh [FINAL SUMMARY] block with all updates included.
"""

# Injected as the system prompt into EVERY nvidia call.
MASTER_SYSTEM_PROMPT = f"""You are a highly advanced, deterministic Frontend React Architect AI.
Your SOLE purpose is to output raw, strictly formatted JSON. 

CRITICAL RULES (PENALTIES APPLY FOR VIOLATIONS):
1. NO MARKDOWN: Never output ```json or ``` blocks.
2. NO CONVERSATION: Output NOTHING except valid JSON. 
3. NO HALLUCINATIONS: Use ONLY components from the COMPONENT LIBRARY.
4. VALID JSON ONLY: No trailing commas, no JavaScript functions.
5. PROP VALUES: Component props must strictly be primitive values (strings, numbers, booleans). NEVER nest a component JSON object inside a prop (e.g., do NOT do "icon": {{"type": "Icon"}}). If a component needs an icon, just pass the string name (e.g., "icon": "star").

STRICT AST SCHEMA RULES:
1. COMPONENT KEY: Every component MUST be declared using the exact key "type". NEVER use "component".
2. NESTING RULE (CRITICAL): If a component contains OTHER components (like a Grid inside a Section), the "children" array MUST sit at the root level of the node, parallel to "type" and "props". Do NOT put component arrays inside "props".
   - BAD: {{"type": "Section", "props": {{"children": [{{"type": "Heading"}}]}}}}
   - GOOD: {{"type": "Section", "props": {{"className": "bg-white"}}, "children": [{{"type": "Heading", "props": {{"children": "Text string"}}}}]}}
3. TEXT CHILDREN: If a child is purely a text string, it goes INSIDE the "props" object (e.g., "props": {{"children": "Welcome"}}).
4. PAGE NAMES: Must be strictly PascalCase with ZERO spaces (e.g., "ProductDetails").
5. NEVER use double quotes inside text strings. If you need to quote something, use single quotes (e.g., "children": "He said 'Hello'"). 

COMPONENT LIBRARY:
{COMPONENT_RULES}
"""

# Call #1 — theme + header + footer + page names with empty layout arrays
BASE_PROMPT_TEMPLATE = """Given this website requirement summary:

{summary}

TASK: Output a JSON object for the BASE LAYOUT of this website.
Include the theme, the header (navbar) components, and the footer components.

Output ONLY this exact JSON structure (populate the arrays with components from the library):
{{
  "theme": {{
    "primaryColor": "indigo",
    "radius": "lg"
  }},
  "layout": {{
    "header": [
      {{ "type": "Navbar", "props": {{ ... }} }}
    ],
    "footer": [
      {{ "type": "Footer", "props": {{ ... }} }}
    ]
  }}
}}
"""

# Call #2..N — one page layout array at a time
PAGE_PROMPT_TEMPLATE = """Given this website requirement summary:

{summary}

Base layout context already built (DO NOT output these again):
- Theme: {theme}
- Header: {header}
- Footer: {footer}

TASK: Generate ONLY the "layout" component array for the "{page_name}" page.
This is for a {website_type} website targeting {target_audience}.

CRITICAL: Output ONLY a valid JSON array starting with [ and ending with ]. Do not wrap it in an object.

Example Structure:
[
  {{
    "type": "Hero",
    "props": {{
      "title": "Welcome to {page_name}",
      "subtitle": "Discover more"
    }}
  }},
  {{
    "type": "Section",
    "props": {{
      "padding": 4
    }},
    "children": [
      {{
        "type": "Grid",
        "props": {{ "cols": 2 }},
        "children": []
      }}
    ]
  }}
]

Output the raw JSON array for "{page_name}" now:
"""

# ==========================================
# 3.5. AUTO-HEAL PROMPT & VALIDATION LOGIC
# ==========================================

HEAL_PROMPT_TEMPLATE = """
CRITICAL SYSTEM ERROR: Your previous JSON generation failed validation.

ERROR MESSAGE: {error_message}

BAD JSON SUBMITTED:
{bad_json}

TASK: Fix the JSON above. Replace the invalid components with the correct ones from the COMPONENT LIBRARY.
Output ONLY the raw, corrected JSON array. Do not apologize. Do not explain.
"""

def _validate_layout_tree(layout_nodes, allowed_components):
    """
    Recursively scans the layout array to ensure NO hallucinated components exist.
    Returns: (is_valid: bool, error_message: str)
    """
    if not isinstance(layout_nodes, list):
        return False, "Layout must be a JSON array."

    for node in layout_nodes:
        # Check for missing type
        comp_type = node.get("type")
        if not comp_type:
            # Maybe it used 'component' by mistake?
            if "component" in node:
                return False, "Used 'component' instead of 'type' key."
            return False, "Node is missing the 'type' key."
        
        # Check for hallucination
        if comp_type not in allowed_components:
            return False, f"Hallucinated component used: '{comp_type}'. You must use an equivalent from the library."

        # Recursively check nested children
        if "children" in node and isinstance(node["children"], list):
            is_valid, err = _validate_layout_tree(node["children"], allowed_components)
            if not is_valid:
                return False, err
                
    return True, ""

# ==========================================
# 4. HELPERS — INTERVIEW LAYER
# ==========================================
_RATE_LIMIT_CODES = {429, 503, 529}


def _is_rate_limit_error(code: int) -> bool:
    return code in _RATE_LIMIT_CODES


def ask_gemini(messages: list) -> tuple:
    payload = {
        "system_instruction": {"parts": [{"text": INTERVIEWER_PROMPT}]},
        "contents": messages,
    }
    try:
        res = requests.post(GEMINI_URL, json=payload, timeout=30)
        if _is_rate_limit_error(res.status_code):
            logger.warning("Gemini rate-limited (%s) -> falling back to Groq.", res.status_code)
            return "", True
        res.raise_for_status()
        text = (
            res.json()
            .get("candidates", [{}])[0]
            .get("content", {})
            .get("parts", [{}])[0]
            .get("text", "")
        )
        return text or "Sorry, I could not process that.", False
    except requests.HTTPError as e:
        code = e.response.status_code if e.response is not None else 0
        if _is_rate_limit_error(code):
            return "", True
        return f"Error contacting Gemini: {e}", False
    except requests.RequestException as e:
        return f"Error contacting Gemini: {e}", False


def _gemini_to_openai_messages(gemini_messages: list) -> list:
    msgs = [{"role": "system", "content": INTERVIEWER_PROMPT}]
    for m in gemini_messages:
        role = "user" if m["role"] == "user" else "assistant"
        text = m["parts"][0]["text"] if m.get("parts") else ""
        msgs.append({"role": role, "content": text})
    return msgs


def ask_groq(gemini_messages: list) -> str:
    try:
        completion = groq_client.chat.completions.create(
            model=GROQ_MODEL,
            messages=_gemini_to_openai_messages(gemini_messages),
            temperature=0.7,
            max_tokens=1024,
        )
        return completion.choices[0].message.content or "Sorry, I could not process that."
    except Exception as e:
        logger.error("Groq fallback failed: %s", e)
        return f"Both Gemini and Groq are unavailable. Error: {e}"


def ask_interviewer(gemini_messages: list) -> tuple:
    reply, rate_limited = ask_gemini(gemini_messages)
    if rate_limited:
        return ask_groq(gemini_messages), "groq"
    return reply, "gemini"


# ==========================================
# 5. HELPERS — ASSEMBLY LINE LAYER
# ==========================================

def _nvidia_call(user_prompt: str) -> str:
    """
    One focused, synchronous NVIDIA call.
      stream=False         -> waits for full completion, zero cut-off risk
      enable_thinking=False -> no reasoning tokens, pure JSON output
      reasoning_budget=0   -> explicitly zeroes out any reasoning budget
      temperature=0.2      -> deterministic, less hallucination
      max_tokens=4096      -> right-sized for one segment
    """
    response = nvidia_client.chat.completions.create(
        model=NVIDIA_MODEL,
        messages=[
            {"role": "system", "content": MASTER_SYSTEM_PROMPT},
            {"role": "user",   "content": user_prompt},
        ],
        temperature=0.2,
        top_p=0.9,
        max_tokens=NVIDIA_MAX_TOKENS,
        stream=False,
        extra_body={
            "reasoning_budget": 0,
            "chat_template_kwargs": {"enable_thinking": False},
        },
    )
    return response.choices[0].message.content or ""


def _clean(raw: str) -> str:
    """Strip markdown fences and surrounding whitespace."""
    return raw.replace("```json", "").replace("```", "").strip()


def _repair_and_parse(raw: str, label: str):
    """
    Clean -> try parse -> repair if needed -> parse again.
    Returns a Python dict/list, or None on total failure.
    """
    cleaned = _clean(raw)
    try:
        return json.loads(cleaned)
    except json.JSONDecodeError:
        logger.warning("[%s] Raw output invalid JSON, attempting repair...", label)

    try:
        repaired_str = repair_json(cleaned, return_objects=False)
        result = json.loads(repaired_str)
        logger.info("[%s] json_repair succeeded.", label)
        return result
    except Exception as e:
        logger.error("[%s] json_repair also failed: %s", label, e)
        return None


def to_pascal_case(text: str) -> str:
    """Helper function to convert 'Product Catalog' into 'ProductCatalog'"""
    # Find all words, ignoring punctuation, and capitalize them
    words = re.findall(r'[a-zA-Z0-9]+', text)
    return "".join(word.capitalize() for word in words)

def _extract_pages(summary: str) -> list:
    """Parse page names from the summary and strictly enforce PascalCase."""
    match = re.search(r"\*\*Pages Needed:\*\*\s*(.+)", summary, re.IGNORECASE)
    if not match:
        return ["Home"]
    
    raw = match.group(1).strip()
    
    # Split the raw string, clean it, and convert every page to PascalCase
    pages = []
    for p in re.split(r"[,;|]", raw):
        cleaned = p.strip().strip("-*").strip()
        if cleaned:
            pages.append(to_pascal_case(cleaned))
            
    return pages if pages else ["Home"]


def _extract_field(summary: str, field: str, default: str = "") -> str:
    match = re.search(rf"\*\*{re.escape(field)}:\*\*\s*(.+)", summary, re.IGNORECASE)
    return match.group(1).strip() if match else default


# ==========================================
# 6. FLASK ROUTES
# ==========================================

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/chat", methods=["POST"])
def chat():
    body = request.get_json()
    user_msg = body.get("message", "")
    history  = body.get("history", [])

    gemini_history = []
    for msg in history:
        role = "user" if msg["role"] == "user" else "model"
        gemini_history.append({"role": role, "parts": [{"text": msg["content"]}]})
    gemini_history.append({"role": "user", "parts": [{"text": user_msg}]})

    reply, provider = ask_interviewer(gemini_history)
    return jsonify({
        "reply":       reply,
        "is_finished": "[FINAL SUMMARY]" in reply,
        "provider":    provider,
    })


@app.route("/generate", methods=["POST"])
def generate():
    body = request.get_json()
    chat_history = body.get("history", [])

    # Pull the most recent FINAL SUMMARY block
    final_summary = ""
    for msg in reversed(chat_history):
        if "[FINAL SUMMARY]" in msg.get("content", ""):
            m = re.search(r"\[FINAL SUMMARY\]([\s\S]*?)\[/FINAL SUMMARY\]", msg["content"])
            if m:
                final_summary = m.group(1).strip()
            break

    if not final_summary:
        def _err():
            yield f"data: {json.dumps({'type': 'error', 'content': 'No final summary found.'})}\n\n"
        return Response(_err(), mimetype="text/event-stream")

    def stream_generator():
        try:
            # ── Parse summary fields ──────────────────────────────────────────
            pages        = _extract_pages(final_summary)
            website_type = _extract_field(final_summary, "Website Type", "website")
            target_aud   = _extract_field(final_summary, "Target Audience", "general users")
            total_steps  = 1 + len(pages)   # 1 base call + 1 per page
            step         = 0
            any_repaired = False

            # ── STEP 1: Base layout ───────────────────────────────────────────
            step += 1
            yield f"data: {json.dumps({'type': 'progress', 'step': step, 'total': total_steps, 'label': 'Building theme, navbar & footer...'})}\n\n"

            base_raw = _nvidia_call(BASE_PROMPT_TEMPLATE.format(summary=final_summary))
            base_obj = _repair_and_parse(base_raw, "BASE")

            if base_obj is None:
                yield f"data: {json.dumps({'type': 'error', 'content': 'Failed to generate base layout. Please try again.'})}\n\n"
                return

            # Normalise structure
            base_obj.setdefault("theme",  {"primaryColor": "indigo", "radius": "lg"})
            base_obj.setdefault("layout", {"header": [], "footer": []})
            base_obj["pages"] = []   # empty — we fill page by page below

            # Context snapshots passed to every page call
            theme_ctx  = json.dumps(base_obj["theme"])
            header_ctx = json.dumps(base_obj["layout"].get("header", []))
            footer_ctx = json.dumps(base_obj["layout"].get("footer", []))

            # ── STEPS 2..N: One page at a time ───────────────────────────────
            # ── STEPS 2..N: One page at a time (WITH AUTO-HEAL) ──────────────
            for page_name in pages:
                step += 1
                yield f"data: {json.dumps({'type': 'progress', 'step': step, 'total': total_steps, 'label': f'Building page: {page_name}...'})}\n\n"

                # Setup the initial prompt for this page
                current_prompt = PAGE_PROMPT_TEMPLATE.format(
                    summary         = final_summary,
                    theme           = theme_ctx,
                    header          = header_ctx,
                    footer          = footer_ctx,
                    page_name       = page_name,
                    website_type    = website_type,
                    target_audience = target_aud,
                )

                max_retries = 3
                page_layout = []
                
                # THE AUTO-HEAL LOOP
                for attempt in range(max_retries):
                    page_raw = _nvidia_call(current_prompt)
                    parsed_layout = _repair_and_parse(page_raw, f"PAGE:{page_name}_ATTEMPT:{attempt+1}")

                    # Normalize arrays
                    if isinstance(parsed_layout, dict):
                        parsed_layout = parsed_layout.get("layout", parsed_layout.get("components", []))
                    if not isinstance(parsed_layout, list):
                        parsed_layout = []

                    # 🛡️ RUN INTERNAL VALIDATOR
                    is_valid, error_msg = _validate_layout_tree(parsed_layout, ALLOWED_COMPONENT_KEYS)

                    if is_valid:
                        # Success! Break out of the retry loop.
                        page_layout = parsed_layout
                        break 
                    else:
                        # 🚑 AUTO-HEAL TRIGGERED!
                        logger.warning("Auto-Heal Triggered on %s: %s", page_name, error_msg)
                        
                        # Send a live update to your frontend UI so the user sees the AI fixing itself!
                        yield f"data: {json.dumps({'type': 'progress', 'step': step, 'total': total_steps, 'label': f'🐛 Bug detected on {page_name}. Auto-healing... (Attempt {attempt+1}/{max_retries})'})}\n\n"
                        
                        # Swap the standard prompt for the HEAL PROMPT
                        current_prompt = HEAL_PROMPT_TEMPLATE.format(
                            error_message=error_msg,
                            bad_json=json.dumps(parsed_layout, indent=2)
                        )
                
                # If it failed 3 times, page_layout will be the last attempted (or empty), 
                # but usually it fixes it on the 1st retry.
                base_obj["pages"].append({
                    "name":   page_name,
                    "layout": page_layout,
                })

            # ── STITCH & SAVE ─────────────────────────────────────────────────
            final_pretty = json.dumps(base_obj, indent=2)

            save_path = os.path.join(BASE_DIR, "generated_layout.json")
            with open(save_path, "w") as f:
                f.write(final_pretty)

            logger.info("layout.json saved (%d bytes, %d pages).", len(final_pretty), len(pages))

            yield f"data: {json.dumps({'type': 'done', 'json_data': final_pretty, 'was_repaired': any_repaired, 'pages': pages})}\n\n"

        except Exception as e:
            logger.exception("Assembly-line generation failed.")
            yield f"data: {json.dumps({'type': 'error', 'content': str(e)})}\n\n"

    return Response(stream_generator(), mimetype="text/event-stream")

@app.route("/build", methods=["POST"])
def build_site():
    def build_stream():
        try:
            # 1. Move JSON
            yield f"data: {json.dumps({'status': '🚚 Copying layout.json to generator...'})}\n\n"
            if os.path.exists(SOURCE_JSON):
                shutil.copy(SOURCE_JSON, TARGET_JSON)
            else:
                yield f"data: {json.dumps({'error': 'generated_layout.json not found.'})}\n\n"
                return

            # 2. Run Python Generator
            yield f"data: {json.dumps({'status': '⚙️ Running generator.py...'})}\n\n"
            gen_proc = subprocess.run(['python', 'generator.py'], cwd=GEN_DIR, capture_output=True, text=True)
            if gen_proc.returncode != 0:
                yield f"data: {json.dumps({'error': f'Generator crashed: {gen_proc.stderr}'})}\n\n"
                return

            # 3. NPM Install
            yield f"data: {json.dumps({'status': '📦 Installing NPM dependencies...'})}\n\n"
            subprocess.run(['npm', 'install'], cwd=SITE_DIR, shell=True)

            # 4. Vite Build (Testing for React errors)
            yield f"data: {json.dumps({'status': '🏗️ Building React site to check for errors...'})}\n\n"
            build_proc = subprocess.run(['npm', 'run', 'build'], cwd=SITE_DIR, shell=True, capture_output=True, text=True)
            
            if build_proc.returncode != 0:
                yield f"data: {json.dumps({'error': f'React Build Failed! Errors detected in the generated code.'})}\n\n"
                return

            # 5. Start Dev Server & Open Browser
            yield f"data: {json.dumps({'status': '🚀 Starting Dev Server...'})}\n\n"
            subprocess.Popen(['npm', 'run', 'dev'], cwd=SITE_DIR, shell=True)
            
            import webbrowser
            webbrowser.open('http://localhost:5173')

            yield f"data: {json.dumps({'done': True})}\n\n"

        except Exception as e:
            logger.exception("Build pipeline failed.")
            yield f"data: {json.dumps({'error': str(e)})}\n\n"

    return Response(build_stream(), mimetype="text/event-stream")


# ==========================================
# 7. ENTRY POINT
# ==========================================
if __name__ == "__main__":
    app.run(debug=True, port=5000)