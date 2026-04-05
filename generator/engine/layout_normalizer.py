def normalize_layout(nodes):

    normalized = []

    for node in nodes:

        node.setdefault("props", {})
        node.setdefault("children", [])

        node["children"] = normalize_layout(node["children"])

        normalized.append(node)

    return normalized