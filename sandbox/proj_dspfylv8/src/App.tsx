
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer, Navbar } from "./components"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar logo="e-commerce-logo" children="Home Products Cart Checkout" className="bg-indigo-600 text-white shadow-md" links={[{"label": "Home", "href": "/"}, {"label": "Products", "href": "/products"}, {"label": "Cart", "href": "/cart"}, {"label": "Checkout", "href": "/checkout"}]} cta={[{"label": "Login", "href": "/login"}]} sticky={true} transparent={false} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer className="bg-gray-800 text-gray-200 py-8" logo="e-commerce-logo" copyright="© 2023 E-Commerce Inc." sections={[{"label": "Company", "links": [{"label": "About Us", "href": "/about"}, {"label": "Careers", "href": "/careers"}, {"label": "Blog", "href": "/blog"}]}, {"label": "Customer Service", "links": [{"label": "Help Center", "href": "/help"}, {"label": "Returns", "href": "/returns"}, {"label": "Contact", "href": "/contact"}]}, {"label": "Legal", "links": [{"label": "Privacy Policy", "href": "/privacy"}, {"label": "Terms of Service", "href": "/terms"}]}]} socialLinks={[{"label": "Facebook", "href": "https://facebook.com"}, {"label": "Twitter", "href": "https://twitter.com"}, {"label": "Instagram", "href": "https://instagram.com"}]} />
    </BrowserRouter>
  )
}
