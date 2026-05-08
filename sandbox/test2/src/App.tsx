
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer, Navbar } from "./components"
import ProductListings from "./pages/ProductListings"
import ShoppingCart from "./pages/ShoppingCart"
import Checkout from "./pages/Checkout"

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div data-component-path="src/components/Navigation/Navbar.tsx" style={{ display: "contents" }}>
        <Navbar logo="MyBrand" cta="Sign Up" links={[{"label": "Home", "href": "/"}]} />
      </div>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<ProductListings />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <div data-component-path="src/components/Navigation/Footer.tsx" style={{ display: "contents" }}>
        <Footer className="text-gray-600 py-6" logo="MyBrand" copyright="© 2023 MyBrand. All rights reserved." sections={[{"label": "Products", "items": [{"label": "Sports Wear", "href": "/products/sports-wear"}]}]} socialLinks={[{"label": "Instagram", "href": "https://instagram.com", "icon": "InstagramIcon"}, {"label": "Twitter", "href": "https://twitter.com", "icon": "TwitterIcon"}]} />
      </div>
    </BrowserRouter>
  )
}
