import json
from engine.fallback_resolver import resolve_component

def generate_component(node, metadata, used, allowed, indent=6):

    component = resolve_component(node["type"], allowed)
    used.add(component)

    props = node.get("props", {})
    children = node.get("children", [])

    # --- THE MAGIC TYPE-AWARE PROP FORMATTER ---
    prop_lines = []
    for k, v in props.items():
        if isinstance(v, str):
            # Normal strings use standard quotes
            prop_lines.append(f'{k}="{v}"')
        elif isinstance(v, bool):
            # Booleans need lowercase true/false in JSX curlies
            js_bool = "true" if v else "false"
            prop_lines.append(f'{k}={{{js_bool}}}')
        elif isinstance(v, (dict, list)):
            # Arrays and Objects get converted to JSON and wrapped in JSX curlies
            js_object = json.dumps(v)
            prop_lines.append(f"{k}={{{js_object}}}")
        else:
            # Numbers
            prop_lines.append(f"{k}={{{v}}}")

    prop_str = " ".join(prop_lines)
    space = " " * indent

    if children:
        child_code = "\n".join(
            generate_component(c, metadata, used, allowed, indent+2)
            for c in children
        )

        return f"""{space}<{component} {prop_str}>
{child_code}
{space}</{component}>"""

    else:
        return f"{space}<{component} {prop_str} />"