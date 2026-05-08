
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer, Navbar } from "./components"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <BrowserRouter>
      <div data-component-path="src/components/Navbar.tsx" style={{ display: "contents" }}>
        <Navbar logo="MyBrand" cta="Sign Up" links={[{"label": "Home", "href": "/"}]} />
      </div>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <div data-component-path="src/components/Footer.tsx" style={{ display: "contents" }}>
        <Footer className="text-gray-600 py-6" logo="MyBrand" copyright="© 2023 MyBrand. All rights reserved." sections={[{"label": "Company", "items": ["About", "Careers", "Blog"]}, {"label": "Resources", "items": ["Help Center", "Investor Relations", "Press"]}, {"label": "Contact", "items": ["Contact Us", "Privacy Policy", "Terms of Service"]}]} socialLinks={[{"label": "Instagram", "url": "https://instagram.com/mybrand"}, {"label": "Twitter", "url": "https://twitter.com/mybrand"}, {"label": "LinkedIn", "url": "https://linkedin.com/company/mybrand"}]} />
      </div>
    </BrowserRouter>
  )
}
