def generate_router(pages, header_jsx="", footer_jsx="", layout_components=None):
    if layout_components is None:
        layout_components = set()

    # Import the page files
    imports = "\n".join(
        f'import {p["name"]} from "./pages/{p["name"]}"'
        for p in pages
    )

    # Import the layout components (Navbar, Footer, etc.)
    layout_imports = ""
    if layout_components:
        layout_imports = f'import {{ {", ".join(sorted(layout_components))} }} from "./components"'

    routes = []
    for p in pages:
        name = p["name"]
        if name.lower() == "home":
            path = "/"
        else:
            path = f"/{name.lower()}"

        routes.append(
            f'<Route path="{path}" element={{<{name} />}} />'
        )

    routes_code = "\n          ".join(routes)

    return f"""
import React from "react"
import {{ BrowserRouter, Routes, Route }} from "react-router-dom"

{layout_imports}
{imports}

export default function App() {{
  return (
    <BrowserRouter>
{header_jsx}
      <main className="min-h-screen">
        <Routes>
          {routes_code}
        </Routes>
      </main>
{footer_jsx}
    </BrowserRouter>
  )
}}
"""