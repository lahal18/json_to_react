def resolve_component(name, allowed):

    if name in allowed:
        return name

    fallback = {
        "HeroBanner":"Hero",
        "HeroSection":"Hero",
        "CardGrid":"FeatureGrid"
    }

    if name in fallback:
        return fallback[name]

    raise Exception(f"Unknown component {name}")