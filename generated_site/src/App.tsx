
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer, Navbar } from "./components"
import SinglePageForProductPromotion from "./pages/SinglePageForProductPromotion"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar logo="CompanyLogo" children="ProductPro" className="bg-indigo-600 text-white shadow-md" links={[{"label": "Home", "href": "/"}, {"label": "Features", "href": "/features"}, {"label": "Pricing", "href": "/pricing"}, {"label": "Contact", "href": "/contact"}]} cta="Get Started" sticky="top" transparent={false} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/singlepageforproductpromotion" element={<SinglePageForProductPromotion />} />
        </Routes>
      </main>
      <Footer className="text-gray-600 py-6 border-t" logo="CompanyLogo" copyright="© 2025 CompanyName. All rights reserved." sections={[{"title": "Product", "links": [{"label": "Overview", "href": "/product"}, {"label": "Features", "href": "/product/features"}, {"label": "Pricing", "href": "/product/pricing"}]}, {"title": "Company", "links": [{"label": "About", "href": "/about"}, {"label": "Careers", "href": "/careers"}, {"label": "Blog", "href": "/blog"}]}, {"title": "Support", "links": [{"label": "Help Center", "href": "/help"}, {"label": "API Documentation", "href": "/api"}, {"label": "Status", "href": "/status"}]}]} socialLinks={[{"label": "LinkedIn", "href": "https://linkedin.com/company"}, {"label": "Twitter", "href": "https://twitter.com/company"}, {"label": "GitHub", "href": "https://github.com/company"}]} />
    </BrowserRouter>
  )
}
