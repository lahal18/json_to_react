import os
import shutil

LIB_PATH = "component_library/src/components"

def copy_components(used, registry, dest):
    print(f"\n--- DEBUG: STARTING COMPONENT COPIER ---")
    print(f"List of components the engine wants to use: {used}")
    
    # 1. Copy the individual component files
    for comp in used:
        if comp not in registry:
            print(f"⚠️ Warning: {comp} is not in your component_registry.json!")
            continue

        rel = registry[comp]
        src = os.path.join(LIB_PATH, rel + ".tsx")
        dst = os.path.join(dest, rel + ".tsx")

        os.makedirs(os.path.dirname(dst), exist_ok=True)

        try:
            with open(src, "r") as f:
                content = f.read()
            with open(dst, "w") as f:
                f.write(content)
            print(f"✅ Successfully copied: {rel}.tsx")
        except FileNotFoundError:
            print(f"❌ ERROR: Could not find the source file at {src}")

    # ==========================================
    # 2. Build the Smart index.ts
    # ==========================================
    master_index_path = os.path.join(os.path.dirname(LIB_PATH), "index.ts")
    
    # dest is ".../generated_site/src/components", so dirname goes up to ".../generated_site/src"
    new_index_path = os.path.join(os.path.dirname(dest), "index.ts")

    # Print the absolute path so we know EXACTLY where Python is looking
    print(f"\nLooking for master index blueprint at:\n{os.path.abspath(master_index_path)}")

    try:
        with open(master_index_path, "r") as f:
            master_lines = f.readlines()
            
        print(f"Found master index.ts! It has {len(master_lines)} total lines.")

        smart_lines = []
        for line in master_lines:
            for comp in used:
                if comp in line:
                    smart_lines.append(line)
                    print(f"➕ Keeping export for {comp}: {line.strip()}")
                    break 

        with open(new_index_path, "w") as f:
            f.writelines(smart_lines)
            
        print(f"✅ Successfully wrote new generated index.ts with {len(smart_lines)} lines!")
            
    except FileNotFoundError:
        print(f"❌ CRITICAL ERROR: Could not find the master index file to read from!")
        
    print("--- DEBUG: FINISHED COMPONENT COPIER ---\n")