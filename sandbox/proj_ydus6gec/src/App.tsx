
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer, Navbar } from "./components"
import Home from "./pages/Home"
import ProductListings from "./pages/ProductListings"
import ShoppingCart from "./pages/ShoppingCart"
import PaymentProcessing from "./pages/PaymentProcessing"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar logo="logo" children="Shop" className="bg-indigo-600 text-white shadow-md" links={[{"label": "Home", "href": "/"}, {"label": "Products", "href": "/products"}, {"label": "Cart", "href": "/cart"}, {"label": "Checkout", "href": "/checkout"}]} cta={[{"label": "Login", "href": "/login"}]} sticky={true} transparent={false} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productlistings" element={<ProductListings />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/paymentprocessing" element={<PaymentProcessing />} />
        </Routes>
      </main>
      <Footer className="bg-gray-800 text-gray-200 py-8" logo="logo" copyright="© 2025 ShopCo" sections={[{"label": "Quick Links", "items": [{"label": "Home", "href": "/"}, {"label": "Products", "href": "/products"}, {"label": "About", "href": "/about"}, {"label": "Contact", "href": "/contact"}]}, {"label": "Support", "items": [{"label": "Help Center", "href": "/help"}, {"label": "Returns", "href": "/returns"}, {"label": "Privacy Policy", "href": "/privacy"}, {"label": "Terms", "href": "/terms"}]}, {"label": "Follow Us", "items": [{"label": "Instagram", "href": "/instagram"}, {"label": "Twitter", "href": "/twitter"}, {"label": "TikTok", "href": "/tiktok"}, {"label": "YouTube", "href": "/youtube"}]}]} socialLinks={[{"icon": "Instagram", "href": "/instagram", "ariaLabel": "Instagram"}, {"icon": "Twitter", "href": "/twitter", "ariaLabel": "Twitter"}, {"icon": "TikTok", "href": "/tiktok", "ariaLabel": "TikTok"}, {"icon": "YouTube", "href": "/youtube", "ariaLabel": "YouTube"}]} />
    </BrowserRouter>
  )
}
