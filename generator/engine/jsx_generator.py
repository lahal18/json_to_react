import json
from engine.fallback_resolver import resolve_component


def _component_source_path(component, registry):
    if registry and component in registry:
        rel = registry[component].replace("\\", "/")
        return f"src/components/{rel}.tsx"
    return f"src/components/{component}.tsx"


def generate_component(node, metadata, used, allowed, indent=6, registry=None):

    component = resolve_component(node["type"], allowed)
    used.add(component)

    props = node.get("props", {})
    children = node.get("children", [])

    # --- THE MAGIC TYPE-AWARE PROP FORMATTER ---
    prop_lines = []
    for k, v in props.items():
        if isinstance(v, str):
            # String props use JSX expressions so generated copy can safely
            # contain quotes, apostrophes, or line breaks.
            prop_lines.append(f"{k}={{{json.dumps(v)}}}")
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

    component_path = _component_source_path(component, registry)
    wrapper_open = f'{space}<div data-component-path="{component_path}" style={{{{ display: "contents" }}}}>'
    wrapper_close = f'{space}</div>'

    if children:
        child_code = "\n".join(
            generate_component(c, metadata, used, allowed, indent+2, registry)
            for c in children
        )

        return f"""{wrapper_open}
{space}  <{component} {prop_str}>
{child_code}
{space}  </{component}>
{wrapper_close}"""

    else:
        return f"""{wrapper_open}
{space}  <{component} {prop_str} />
{wrapper_close}"""
