import os

def build_registry(root):

    registry = {}

    for path, dirs, files in os.walk(root):

        for file in files:

            if file.endswith(".tsx"):

                name = file.replace(".tsx","")

                rel = os.path.relpath(
                    os.path.join(path,file),
                    root
                )

                registry[name] = rel.replace(".tsx","")

    return registry