
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer, Navbar } from "./components"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ShoppingCart from "./pages/ShoppingCart"
import Checkout from "./pages/Checkout"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar logo="logo" children="logo" className="bg-indigo-600 text-white shadow-md" links={[{"type": "Link", "props": {"href": "/", "children": "Home"}}, {"type": "Link", "props": {"href": "/products", "children": "Products"}}, {"type": "Link", "props": {"href": "/cart", "children": "Cart"}}, {"type": "CTA", "props": {"title": "Login", "description": "", "primaryButton": {"type": "SubmitButton", "props": {"children": "Sign In"}}, "secondaryButton": {"type": "SubmitButton", "props": {"children": "Register"}}, "className": "ml-2"}}]} sticky={true} transparent={false} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer className="text-gray-600 py-6 border-t" logo="logo" copyright="© 2025 Modern Gear Co." sections={[{"type": "Heading", "props": {"children": "Shop", "level": 4, "color": "text-gray-500"}}, {"type": "Link", "props": {"href": "/about", "children": "About Us"}}, {"type": "Link", "props": {"href": "/contact", "children": "Contact"}}]} socialLinks={[{"type": "Link", "props": {"href": "#", "children": "Instagram"}}, {"type": "Link", "props": {"href": "#", "children": "Twitter"}}, {"type": "Link", "props": {"href": "#", "children": "LinkedIn"}}]} />
    </BrowserRouter>
  )
}
