
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer, Navbar } from "./components"
import Home from "./pages/Home"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar logo="MyBrand" cta="Sign Up" links={[{"label": "Home", "href": "/"}]} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer className="text-gray-600 py-6" logo="MyBrand" copyright="© 2023 MyBrand. All rights reserved." sections={[{"label": "Company", "items": [{"label": "About", "href": "/about"}]}, {"label": "Resources", "items": [{"label": "Blog", "href": "/blog"}]}, {"label": "Support", "items": [{"label": "Help Center", "href": "/support"}]}, {"label": "Contact", "items": [{"label": "Email", "href": "mailto:info@mybrand.com"}]}]} socialLinks={[{"label": "Instagram", "href": "https://instagram.com/mybrand", "icon": "InstagramIcon"}, {"label": "LinkedIn", "href": "https://linkedin.com/company/mybrand", "icon": "LinkedInIcon"}]} />
    </BrowserRouter>
  )
}
