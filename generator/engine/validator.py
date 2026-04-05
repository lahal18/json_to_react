def validate_layout(layout, allowed):

    for node in layout:

        comp = node["type"]

        if comp not in allowed:
            raise Exception(f"Invalid component {comp}")

        children = node.get("children", [])

        validate_layout(children, allowed)