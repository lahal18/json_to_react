import json
import os
import shutil
import subprocess

from engine.layout_normalizer import normalize_layout
from engine.validator import validate_layout
from engine.jsx_generator import generate_component
from engine.dependency_resolver import resolve_dependencies
from engine.component_copier import copy_components
from engine.router_generator import generate_router
from engine.theme_generator import generate_theme
from engine.component_registry_builder import build_registry
from engine.generate_component_index import generate_component_index




def inject_telemetry(site_dir):
    """Automatically injects the local GlitchTip-Lite script into the generated React app."""
    index_path = os.path.join(site_dir, 'index.html')
    
    if not os.path.exists(index_path):
        print(f" [WARNING] Could not find {index_path}. Telemetry script was not injected.")
        return

    # 1. Read the generated index.html
    with open(index_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # 2. The Telemetry Payload
    telemetry_script = """
    <script src="https://browser.sentry-cdn.com/7.105.0/bundle.min.js" crossorigin="anonymous"></script>
    <script>
      Sentry.init({
        dsn: "", // Replace with actual DSN when ready
      });
      Sentry.setTag("project_id", '""" + PROJECT_ID + """');
    </script>
    """

    # 3. Inject it right before the closing </head> tag
    if '</head>' in html_content:
        html_content = html_content.replace('</head>', f'{telemetry_script}\n  </head>')
    else:
        # Fallback just in case
        html_content += telemetry_script

    # 4. Save the file back
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(html_content)
        
    print(" Local Telemetry script injected successfully!")


import argparse

# ----------------------------------------------------
# PATH CONFIGURATION
# ----------------------------------------------------

parser = argparse.ArgumentParser(description='Generate React Site.')
parser.add_argument('--output-dir', type=str, default="../generated_site", help='Directory to generate the site in.')
parser.add_argument('--project-id', type=str, default="default_project", help='ID of the project.')
args = parser.parse_args()

SITE_TEMPLATE = "../site_template"
GENERATED_SITE = args.output_dir
PROJECT_ID = args.project_id

SRC_PATH = os.path.join(GENERATED_SITE, "src")
PAGES_PATH = os.path.join(SRC_PATH, "pages")
COMPONENTS_PATH = os.path.join(SRC_PATH, "components")
THEME_PATH = os.path.join(SRC_PATH, "theme")


# ----------------------------------------------------
# PREPARE GENERATED SITE
# ----------------------------------------------------

print("Preparing project...")

if os.path.exists(GENERATED_SITE):
    shutil.rmtree(GENERATED_SITE)

shutil.copytree(SITE_TEMPLATE, GENERATED_SITE)

os.makedirs(PAGES_PATH, exist_ok=True)
os.makedirs(COMPONENTS_PATH, exist_ok=True)
os.makedirs(THEME_PATH, exist_ok=True)


# ----------------------------------------------------
# LOAD CONFIG FILES
# ----------------------------------------------------

with open("layout.json") as f:
    data = json.load(f)

with open("config/components.json") as f:
    allowed = set(json.load(f)["components"])

with open("config/component_metadata.json") as f:
    metadata = json.load(f)

with open("config/dependency_graph.json") as f:
    dep_graph = json.load(f)


# ----------------------------------------------------
# BUILD COMPONENT REGISTRY
# ----------------------------------------------------

registry = build_registry(
    "component_library/src/components"
)


# ----------------------------------------------------
# GLOBAL STATE
# ----------------------------------------------------

used_components = set()
pages = data["pages"]

# ----------------------------------------------------
# GENERATE GLOBAL LAYOUT (NAVBAR & FOOTER)
# ----------------------------------------------------
print("Processing global layout...")

global_layout = data.get("layout", {})
header_nodes = normalize_layout(global_layout.get("header", []))
footer_nodes = normalize_layout(global_layout.get("footer", []))

validate_layout(header_nodes, allowed)
validate_layout(footer_nodes, allowed)

# Track components specifically used in the layout for App.tsx imports
layout_components = set()

header_jsx = "\n".join(
    generate_component(node, metadata, layout_components, allowed)
    for node in header_nodes
)

footer_jsx = "\n".join(
    generate_component(node, metadata, layout_components, allowed)
    for node in footer_nodes
)

# Merge layout components into the global list so they get copied
used_components.update(layout_components)


# ----------------------------------------------------
# GENERATE PAGES
# ----------------------------------------------------

print("Generating pages...")

for page in pages:

    page_name = page["name"]

    # Normalize layout
    layout_nodes = normalize_layout(page["layout"])

    # Validate layout
    validate_layout(layout_nodes, allowed)

    # Generate JSX
    jsx = "\n".join(
        generate_component(
            node,
            metadata,
            used_components,
            allowed
        )
        for node in layout_nodes
    )
    
    generate_component_index(
        used_components,
        registry,
        COMPONENTS_PATH
    )

    # Generate imports
    # We subtract layout_components because App.tsx imports those, the page doesn't need to!
    page_specific_components = used_components - layout_components
    imports = f'import {{ {", ".join(sorted(page_specific_components))} }} from "../components"' if page_specific_components else ""

    page_code = f"""
import React from "react"
{imports}

export default function {page_name}() {{
  return (
    <div>
{jsx}
    </div>
  )
}}
"""

    page_file = os.path.join(PAGES_PATH, f"{page_name}.tsx")

    with open(page_file, "w", encoding="utf-8") as f:
        f.write(page_code)

    print(f"Page generated: {page_name}")


# ----------------------------------------------------
# RESOLVE DEPENDENCIES
# ----------------------------------------------------

print("Resolving dependencies...")

used_components = resolve_dependencies(
    used_components,
    registry
)


# ----------------------------------------------------
# COPY COMPONENTS
# ----------------------------------------------------

print("Copying components...")

copy_components(
    used_components,
    registry,
    COMPONENTS_PATH
)


# ----------------------------------------------------
# GENERATE THEME
# ----------------------------------------------------

print("Generating theme...")

generate_theme(
    data.get("theme", {}),
    THEME_PATH
)


# ----------------------------------------------------
# GENERATE ROUTER
# ----------------------------------------------------

print("Generating router...")

# Pass the generated header, footer, and layout imports to the router
router_code = generate_router(pages, header_jsx, footer_jsx, layout_components)

app_path = os.path.join(SRC_PATH, "App.tsx")

with open(app_path, "w") as f:
    f.write(router_code)




# 1. Get the directory where generator.py currently lives
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))

# 2. Get the correct site root
SITE_ROOT = os.path.abspath(GENERATED_SITE)

# 3. Inject the telemetry script into the correct index.html
inject_telemetry(SITE_ROOT)

print("[SUCCESS] Site generation complete!")

# ----------------------------------------------------
# DONE
# ----------------------------------------------------
# ----------------------------------------------------
# AUTOMATE TAILWIND & VITE CONFIGURATION
# ----------------------------------------------------
print("Configuring Vite and Tailwind CSS...")

# 1. Write the vite.config.ts file
vite_config_code = """import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
"""
with open(os.path.join(GENERATED_SITE, "vite.config.ts"), "w") as f:
    f.write(vite_config_code)

# 2. Write the src/index.css file
index_css_code = """@import "tailwindcss";\n"""
with open(os.path.join(SRC_PATH, "index.css"), "w") as f:
    f.write(index_css_code)

# 3. Automatically run NPM Install for the required packages
print("Installing NPM packages (this might take a few seconds)...")
try:
    # We use shell=True on Windows to ensure npm commands are recognized
    subprocess.run(
        ["npm", "install", "-D" ,"tailwindcss", "@tailwindcss/vite","@types/node", "@types/react", "@types/react-dom"],
        cwd=GENERATED_SITE,
        shell=True,
        check=True
    )
    print("Dependencies installed successfully!")
except Exception as e:
    print(f"Warning: Could not automatically install npm packages. Error: {e}")