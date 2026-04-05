import os

def generate_theme(theme, theme_path):

    primary = theme.get("primaryColor", "blue")
    radius = theme.get("radius", "md")

    theme_code = f"""
export const theme = {{
  primaryColor: "{primary}",
  radius: "{radius}"
}}
"""

    os.makedirs(theme_path, exist_ok=True)

    file_path = os.path.join(theme_path, "theme.ts")

    with open(file_path, "w") as f:
        f.write(theme_code)