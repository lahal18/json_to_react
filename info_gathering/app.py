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
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "AIzaSyASFrTM3i9eIu2KhNlHyR7rsvQ8kWTzjd0")
GROQ_API_KEY   = os.environ.get("GROQ_API_KEY",   "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")
NVIDIA_API_KEY = os.environ.get("NVIDIA_API_KEY",  "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")

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
NVIDIA_MODEL  = "nvidia/nemotron-3-nano-30b-a3b" 
HEALING_MODEL = NVIDIA_MODEL
NVIDIA_MAX_TOKENS = 4096   # small enough per segment, large enough for detail

# ==========================================
# 2. LOAD COMPONENT RULES
# ==========================================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
METADATA_PATH = os.path.abspath(
    os.path.join(BASE_DIR, "..", "generator", "config", "component_metadata.json")
)

GEN_DIR = os.path.abspath(os.path.join(BASE_DIR, "..", "generator"))
SITE_DIR = os.path.abspath(os.path.join(BASE_DIR, "..", "generated_site"))
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


import json # Make sure this is imported at the top of app.py!

def _chunk_text(text, max_chars=3000):
    """
    Grabs the Top and Bottom of the error log.
    Vite usually puts the file path at the very top!
    """
    if len(text) <= max_chars:
        return text
    
    half = max_chars // 2
    head = text[:half]
    tail = text[-half:]
    
    return f"{head}\n\n... [MIDDLE TRUNCATED TO SAVE TOKENS] ...\n\n{tail}"

def heal_react_code(error_log, site_dir):
    """The AI Surgeon: Diagnoses errors and rewrites code using Nemotron-120b."""
    
    # 🚨 EXACT ERROR PRINT
    print("\n" + "="*50)
    print("🚨 EXACT VITE ERROR LOG:")
    print(error_log)
    print("="*50 + "\n")
    
    try:
        # 1. Grab the Top and Bottom of the error log
        chunked_log = _chunk_text(error_log, max_chars=3000)
        
        # 2. Ask Nemotron to extract the path using JSON formatting
        # 2. Ask Nemotron to extract the path using JSON formatting
        prompt1 = f"""Analyze this React/Vite build error.
        Extract the EXACT relative file path of the SOURCE CODE file causing the issue.
        
        CRITICAL RULES:
        1. IGNORE internal Node.js, Vite, or Rollup stack traces (e.g., do not output paths starting with node_modules/, internal/, or scripts/).
        2. The file MUST be part of the user's actual codebase, usually ending in .tsx, .ts, .jsx, or .js (e.g., src/components/Hero.tsx).
        
        Respond ONLY with a valid JSON object in this exact format: {{"file_path": "src/components/YourFile.tsx"}}
        
        Error Log:
        {chunked_log}"""
        
        res1 = nvidia_client.chat.completions.create(
            model=HEALING_MODEL,
            messages=[
                {"role": "system", "content": "You are a JSON path extractor. Output ONLY valid JSON."},
                {"role": "user", "content": prompt1}
            ],
            temperature=0.1, 
            max_tokens=1000,
            stream=False,
            extra_body={
                "reasoning_budget": 0,
                "chat_template_kwargs": {"enable_thinking": False},
            }
        )
        
        raw_path_content = res1.choices[0].message.content
        if not raw_path_content:
            return False, "AI failed to extract a file path (empty response)."
            
        # --- FIXED: STRIP OUT <think> TAGS ---
        if "</think>" in raw_path_content:
            raw_path_content = raw_path_content.split("</think>")[-1].strip()
            
        # Parse the JSON response
        try:
            clean_json_str = raw_path_content.replace('```json', '').replace('```', '').strip()
            path_data = json.loads(clean_json_str)
            relative_path = path_data.get("file_path", "")
        except json.JSONDecodeError:
            return False, f"AI output invalid JSON for path extraction: {raw_path_content}"

        if not relative_path:
            return False, "AI returned JSON, but the file_path was empty."
            
        full_path = os.path.join(site_dir, relative_path)
        
        if not os.path.exists(full_path):
            return False, f"Could not locate the broken file on disk: {relative_path}"

        # 3. Read the broken code
        with open(full_path, 'r', encoding='utf-8', errors='ignore') as f:
            broken_code = f.read()
            
        chunked_code = _chunk_text(broken_code, max_chars=8000)

        # 4. Ask Nemotron to write the fix
        prompt2 = f"""You are an expert React and TypeScript developer. Fix the build error in this file.
        
        Error Log:
        {chunked_log}
        
        Broken Code ({relative_path}):
        ```tsx
        {chunked_code}
        ```
        
        CRITICAL: Return ONLY the raw, corrected code. 
        Do not include markdown fences (like ```tsx) around the final output."""
        
        res2 = nvidia_client.chat.completions.create(
            model=HEALING_MODEL,
            messages=[
                {"role": "system", "content": "You are a code fixer. Output ONLY raw, valid code."},
                {"role": "user", "content": prompt2}
            ],
            temperature=0.2, 
            max_tokens=4000,
            stream=False,
            extra_body={
                "reasoning_budget": 0,
                "chat_template_kwargs": {"enable_thinking": False},
            }
        )
        
        raw_code_content = res2.choices[0].message.content
        if not raw_code_content:
            return False, "AI failed to generate a code fix (empty response)."
            
        # --- FIXED: STRIP OUT <think> TAGS ---
        if "</think>" in raw_code_content:
            raw_code_content = raw_code_content.split("</think>")[-1].strip()
            
        fixed_code = raw_code_content.strip()
        
        # 5. Clean up the AI's output
        import re
        match = re.search(r'```(?:tsx|ts|jsx|js|javascript|typescript|html|css)?\s(.*?)```', fixed_code, re.DOTALL)
        if match:
            fixed_code = match.group(1).strip()
        else:
            # Fallback if no markdown fences were provided
            fixed_code = fixed_code.strip()
            
        if not fixed_code:
            return False, "AI generated an empty code block."

        # 6. Apply the patch
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(fixed_code)
            
        return True, f"Patched {relative_path}"
        
    except Exception as e:
        import traceback # Useful for debugging exact line errors
        traceback.print_exc()
        return False, str(e)


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
    data = request.get_json() or {}
    project_id = data.get("project_id", "default_project")
    
    SITE_DIR = os.path.abspath(os.path.join(BASE_DIR, "..", "sandbox", project_id))

    def build_stream():
        try:
            # 1. Move JSON
            yield f"data: {json.dumps({'status': '🚚 Copying layout.json to generator...'})}\n\n"
            # It's better to process JSON in GEN_DIR, but since app.py reads SOURCE_JSON from its dir
            if os.path.exists(SOURCE_JSON):
                shutil.copy(SOURCE_JSON, TARGET_JSON)
            else:
                yield f"data: {json.dumps({'error': 'generated_layout.json not found.'})}\n\n"
                return

            # 2. Run Python Generator and stream output
            yield f"data: {json.dumps({'status': '⚙️ Generating React components...'})}\n\n"
            
            gen_proc = subprocess.Popen(
                ['python', 'generator.py', '--output-dir', SITE_DIR, '--project-id', project_id], 
                cwd=GEN_DIR, 
                stdout=subprocess.PIPE, 
                stderr=subprocess.STDOUT, 
                text=True, 
                bufsize=1
            )
            
            for line in gen_proc.stdout:
                clean_line = line.strip()
                if clean_line:
                    yield f"data: {json.dumps({'status': f'├── {clean_line}'})}\n\n"
                    
            gen_proc.wait()
            if gen_proc.returncode != 0:
                yield f"data: {json.dumps({'error': 'Generator failed.'})}\n\n"
                return

            # 3. NPM Install
            yield f"data: {json.dumps({'status': '📦 Installing NPM dependencies...'})}\n\n"
            subprocess.run(['npm', 'install'], cwd=SITE_DIR, shell=True)

            # 4. Start Dev Server Configuration
            yield f"data: {json.dumps({'status': '🚀 Build generated successfully! Starting Dev Server...'})}\n\n"
            
            # Find and kill any existing node process in Windows (on port 5173 ideally)
            # For simplicity, we just run the server. If the user clicks multiple times, it might fail to bind 5173.
            subprocess.Popen(['npm', 'run', 'dev'], cwd=SITE_DIR, shell=True)
            
            yield f"data: {json.dumps({'done': True, 'url': 'http://localhost:5173'})}\n\n"

        except Exception as e:
            logger.exception("Build pipeline failed.")
            yield f"data: {json.dumps({'error': str(e)})}\n\n"

    return Response(build_stream(), mimetype="text/event-stream")


@app.route("/report-runtime-error", methods=["POST"])
def report_runtime_error():
    data = request.get_json()
    error_message = data.get("error", "Unknown runtime error")
    project_id = data.get("project_id", "default_project")
    
    print("\n" + "🚨"*10)
    print("RUNTIME ERROR DETECTED BY BROWSER TELEMETRY:")
    print(error_message)
    print("PROJECT:", project_id)
    print("🚨"*10 + "\n")

    SITE_DIR = os.path.abspath(os.path.join(BASE_DIR, "..", "sandbox", project_id))
    
    # Run the same healing logic we built earlier
    is_healed, message = heal_react_code(error_message, SITE_DIR)
    
    if is_healed:
        print(f"🩹 AI Surgeon applied fix: {message}")
        print("🔄 Please refresh your browser to test the fix.")
        return jsonify({"status": "healed", "message": message}), 200
    else:
        print(f"❌ AI Surgeon failed to fix runtime error: {message}")
        return jsonify({"status": "failed", "message": message}), 500

@app.route("/api/projects", methods=["GET"])
def list_projects():
    sandbox_dir = os.path.abspath(os.path.join(BASE_DIR, "..", "sandbox"))
    if not os.path.exists(sandbox_dir):
        return jsonify([])
    projects = [p for p in os.listdir(sandbox_dir) if os.path.isdir(os.path.join(sandbox_dir, p))]
    return jsonify(projects)

@app.route("/ide/<project_id>")
def ide_view(project_id):
    return render_template("ide.html", project_id=project_id)

@app.route("/api/sandbox/<project_id>/tree")
def sandbox_tree(project_id):
    site_dir = os.path.abspath(os.path.join(BASE_DIR, "..", "sandbox", project_id))
    if not os.path.exists(site_dir):
        return jsonify({"error": "Project not found"}), 404

    def build_tree(dir_path):
        tree = []
        for name in sorted(os.listdir(dir_path)):
            if name in ['node_modules', '.git']:
                continue
            path = os.path.join(dir_path, name)
            is_dir = os.path.isdir(path)
            node = {
                "name": name,
                "path": os.path.relpath(path, site_dir),
                "is_dir": is_dir
            }
            if is_dir:
                node["children"] = build_tree(path)
            tree.append(node)
        return tree

    return jsonify(build_tree(site_dir))

@app.route("/api/sandbox/<project_id>/file")
def get_sandbox_file(project_id):
    file_path = request.args.get("path")
    site_dir = os.path.abspath(os.path.join(BASE_DIR, "..", "sandbox", project_id))
    full_path = os.path.abspath(os.path.join(site_dir, file_path))
    
    if not full_path.lower().startswith(site_dir.lower()) or not os.path.exists(full_path) or not os.path.isfile(full_path):
        return jsonify({"error": "Invalid file path"}), 400
        
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()
    return jsonify({"content": content})

# ==========================================
# 7. ENTRY POINT
# ==========================================
if __name__ == "__main__":
    app.run(debug=True, port=5000)