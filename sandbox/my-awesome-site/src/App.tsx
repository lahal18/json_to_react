
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer, Navbar } from "./components"
import ProductListings from "./pages/ProductListings"
import ShoppingCart from "./pages/ShoppingCart"
import Checkout from "./pages/Checkout"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar data-component-path="src/components/Navbar.tsx" logo="MyBrand" cta="Sign Up" links={[{"label": "Home", "href": "/"}]} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<ProductListings />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer data-component-path="src/components/Footer.tsx" className="text-center py-8" logo="MyBrand" copyright="© 2023 MyBrand. All rights reserved." sections={[{"label": "Quick Links", "items": [{"label": "Home", "href": "/"}, {"label": "Products", "href": "/products"}, {"label": "About", "href": "/about"}]}, {"label": "Support", "items": [{"label": "Help Center", "href": "/help"}, {"label": "Returns", "href": "/returns"}, {"label": "Contact", "href": "/contact"}]}, {"label": "Extras", "items": [{"label": "Blog", "href": "/blog"}, {"label": "Newsletter", "href": "/newsletter"}]}]} socialLinks={[{"label": "Instagram", "url": "https://instagram.com"}, {"label": "Twitter", "url": "https://twitter.com"}, {"label": "Facebook", "url": "https://facebook.com"}]} />
    </BrowserRouter>
  )
}
