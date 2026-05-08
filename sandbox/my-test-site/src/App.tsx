
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer, Navbar } from "./components"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div data-component-path="src/components/Navigation/Navbar.tsx" style={{ display: "contents" }}>
        <Navbar logo="MyBrand" cta="Sign Up" links={[{"label": "Home", "href": "/"}]} />
      </div>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <div data-component-path="src/components/Navigation/Footer.tsx" style={{ display: "contents" }}>
        <Footer className="text-gray-600 py-6" logo="MyBrand" copyright="© 2024 MyBrand. All rights reserved." sections={[{"label": "Company", "items": ["About", "Careers", "Blog"]}, {"label": "Resources", "items": ["Help Center", "Investor Relations", "API Documentation"]}, {"label": "Support", "items": ["Contact Us", "FAQ", "Shipping Policies"]}, {"label": "Community", "items": ["Forum", "Events", "Challenges"]}]} socialLinks={[{"label": "Instagram", "url": "https://instagram.com/mybrand"}, {"label": "Twitter", "url": "https://twitter.com/mybrand"}, {"label": "Facebook", "url": "https://facebook.com/mybrand"}, {"label": "YouTube", "url": "https://youtube.com/mybrand"}]} />
      </div>
    </BrowserRouter>
  )
}
