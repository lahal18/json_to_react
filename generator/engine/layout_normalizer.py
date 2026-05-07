def normalize_layout(nodes):
    if not isinstance(nodes, list):
        return []

    normalized = []

    for node in nodes:
        if not isinstance(node, dict):
            continue

        node.setdefault("props", {})
        node.setdefault("children", [])

        if isinstance(node["children"], list):
            node["children"] = normalize_layout(node["children"])
        else:
             node["children"] = []

        normalized.append(node)

    return normalized