import os
import re

LIB_PATH = "component_library/src/components"


def resolve_dependencies(used, registry):

    discovered = set(used)

    changed = True

    while changed:

        changed = False

        for comp in list(discovered):

            if comp not in registry:
                continue

            file_path = os.path.join(
                LIB_PATH,
                registry[comp] + ".tsx"
            )

            if not os.path.exists(file_path):
                continue

            with open(file_path) as f:
                content = f.read()

            imports = re.findall(
                r'import\s+.*?from\s+[\'"](.+?)[\'"]',
                content
            )

            for imp in imports:

                # ignore external libraries
                if not imp.startswith("."):
                    continue

                name = imp.split("/")[-1]

                if name not in discovered:

                    discovered.add(name)
                    changed = True

    return discovered