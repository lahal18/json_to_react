import os

def generate_component_index(used, registry, dest):

    lines = []

    for comp in sorted(used):

        if comp not in registry:
            continue

        rel = registry[comp]   # e.g. "Marketing/CTASection"
        
        # Ensure forward slashes are used for cross-platform compatibility
        rel = rel.replace("\\", "/")

        lines.append(
            f'export {{ default as {comp} }} from "./{rel}"'
        )

    index_file = os.path.join(dest, "index.ts")

    with open(index_file, "w") as f:
        f.write("\n".join(lines))