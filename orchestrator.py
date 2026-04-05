import os
import shutil
import subprocess
import time
import google.generativeai as genai

# --- Configuration ---
genai.configure(api_key=os.environ.get("GEMINI_API_KEY", "YOUR_API_KEY_HERE"))
model = genai.GenerativeModel('gemini-1.5-flash') 

INFO_DIR = 'info_gathering'
GEN_DIR = 'generator'
SITE_DIR = os.path.join(GEN_DIR, 'component_library')

SOURCE_JSON = os.path.join(INFO_DIR, 'generated_layout.json')
TARGET_JSON = os.path.join(GEN_DIR, 'layout.json')

MAX_RETRIES = 3 

def start_pipeline(retry_count=0):
    if retry_count > MAX_RETRIES:
        print("🚨 Max retries reached. AI could not fix the React site. Manual intervention required.")
        return False

    print(f"\n🚀 Starting Pipeline (Attempt {retry_count + 1})...")
    
    if retry_count == 0:
        print(f"👀 Watching for {SOURCE_JSON}...")
        while not os.path.exists(SOURCE_JSON):
            time.sleep(2)
        print("✅ Layout JSON detected!")
        time.sleep(1) 
        shutil.copy(SOURCE_JSON, TARGET_JSON)

        # Step 1: Run Generator (NO AI HEALING HERE)
        print("⚙️ Running generator.py...")
        gen_result = subprocess.run(['python', 'generator.py'], cwd=GEN_DIR, capture_output=True, text=True)
        
        if gen_result.returncode != 0:
            print("❌ Layer 1 Error: Generator Failed! (Manual Fix Required)")
            print(gen_result.stderr)
            return False # Pipeline stops so you can fix your generator code
        
        print("✅ Site generation complete!")

    # Step 2: Test the Generated Site (AI HEALING ACTIVE HERE)
    print("🏗️ Running Vite Production Build (Testing React code)...")
    build_result = subprocess.run(['npm', 'run', 'build'], cwd=SITE_DIR, capture_output=True, text=True)
    
    if build_result.returncode != 0:
        print("❌ Layer 2 Error: Vite Build Failed! Triggering AI Front-End Dev...")
        healed = trigger_react_self_healing(build_result.stderr)
        
        if healed:
            # If fixed, retry the build process only (no need to regenerate the site)
            return start_pipeline(retry_count + 1) 
        else:
            return False
        
    print("🎉 Pipeline Success! Starting Dev Server...")
    subprocess.Popen(['npm', 'run', 'dev'], cwd=SITE_DIR)
    
    import webbrowser
    webbrowser.open('http://localhost:5173')
    return True

def trigger_react_self_healing(error_log):
    print("\n🩺 AI Diagnostician analyzing Vite error...")
    
    # 1. Ask AI to find the broken file path
    diagnosis_prompt = f"""
    Analyze the following Vite/React build error log.
    Identify the exact file path that is causing the error.
    Return ONLY the relative file path as a string (e.g., src/components/Hero.tsx or src/App.tsx).
    Do not add any explanation, markdown formatting, or other text.
    
    Error Log:
    {error_log}
    """
    
    try:
        file_path_response = model.generate_content(diagnosis_prompt)
        # Clean up the output to ensure it's just a path
        relative_path = file_path_response.text.strip().replace('`', '').replace('"', '').replace("'", "")
        full_file_path = os.path.join(SITE_DIR, relative_path)
        
        print(f"📁 Diagnostician identified faulty file: {relative_path}")
        
        if not os.path.exists(full_file_path):
            print(f"❌ Could not find file at {full_file_path}. AI hallucinated the path or it's a global config error.")
            return False

        # 2. Read the broken React code
        with open(full_file_path, 'r', encoding='utf-8') as f:
            broken_code = f.read()

        # 3. The Surgeon AI fixes the code
        print("🧠 AI Surgeon writing fix for React component...")
        surgeon_prompt = f"""
        You are an expert React and TypeScript developer.
        The following code failed to build. 
        
        Error Log:
        {error_log}
        
        Broken Code ({relative_path}):
        ```tsx
        {broken_code}
        ```
        
        Fix the code to resolve the build error. Ensure imports are correct and types are valid.
        CRITICAL: Return ONLY the raw, corrected code. Do not include markdown formatting (like ```tsx), no explanations, and no conversational text.
        """

        response = model.generate_content(surgeon_prompt)
        fixed_code = response.text.strip()
        
        # Strip markdown formatting if the AI includes it
        if fixed_code.startswith("```"):
            fixed_code = "\n".join(fixed_code.split("\n")[1:])
        if fixed_code.endswith("```"):
            fixed_code = "\n".join(fixed_code.split("\n")[:-1])
            
        fixed_code = fixed_code.strip()

        # 4. Apply the patch
        with open(full_file_path, 'w', encoding='utf-8') as f:
            f.write(fixed_code)
            
        print(f"🩹 Patch applied successfully to {relative_path}!")
        return True
        
    except Exception as e:
        print(f"❌ AI Healing failed: {e}")
        return False

if __name__ == "__main__":
    start_pipeline()