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
    # Check if the AI actually generated a page named "Home"
    has_home = any(p["name"].lower() == "home" for p in pages)

    for i, p in enumerate(pages):
        name = p["name"]
        
        # Make it the root path IF it's named "home", 
        # OR if it's the first page and the AI didn't create a "home" page.
        if name.lower() == "home" or (i == 0 and not has_home):
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
    <BrowserRouter basename={{import.meta.env.BASE_URL}}>
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
