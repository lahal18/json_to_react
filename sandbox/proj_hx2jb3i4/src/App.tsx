
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer, Navbar } from "./components"
import SinglePage from "./pages/SinglePage"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar logo="MyBrand" cta="Sign Up" links={[{"label": "Home", "href": "/"}]} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<SinglePage />} />
        </Routes>
      </main>
      <Footer logo="MyBrand" copyright="© 2023 MyBrand. All rights reserved." sections={[{"label": "Product", "items": [{"label": "Home", "href": "/"}]}, {"label": "Company", "items": [{"label": "About", "href": "/about"}]}, {"label": "Support", "items": [{"label": "Help Center", "href": "/help"}]}, {"label": "Contact", "items": [{"label": "Email", "href": "mailto:info@mybrand.com"}]}]} socialLinks={[{"label": "Facebook", "url": "https://www.facebook.com/mybrand"}, {"label": "Twitter", "url": "https://twitter.com/mybrand"}, {"label": "Instagram", "url": "https://www.instagram.com/mybrand"}]} className="text-gray-600" />
    </BrowserRouter>
  )
}
