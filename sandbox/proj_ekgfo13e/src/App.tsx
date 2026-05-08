
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer, Navbar } from "./components"
import SinglePageProductShowcase from "./pages/SinglePageProductShowcase"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar logo="MyBrand" cta="Sign Up" links={[{"label": "Home", "href": "/"}]} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/singlepageproductshowcase" element={<SinglePageProductShowcase />} />
        </Routes>
      </main>
      <Footer className="text-gray-600 py-6" logo="MyBrand" copyright="© 2023 MyBrand. All rights reserved." sections={[{"label": "Product Showcase", "items": [{"label": "Home", "href": "/"}]}]} socialLinks={[{"label": "Twitter", "url": "https://twitter.com"}, {"label": "LinkedIn", "url": "https://linkedin.com"}]} />
    </BrowserRouter>
  )
}
