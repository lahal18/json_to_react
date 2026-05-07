import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer, Navbar } from "./components"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar logo="LuxuryShoes" children={[{ type: "FlexRow", props: { children: [{ type: "Link", props: { children: "Home" } }, { type: "Link", props: { children: "Products" } }, { type: "Link", props: { children: "Cart" } }, { type: "Link", props: { children: "Checkout" } }, { type: "Link", props: { children: "About" } }, { type: "Link", props: { children: "Contact" } }], className: "text-gray-800 hover:text-indigo-600" }]} className="bg-white shadow-md" links={["Home", "Products", "Cart", "Checkout", "About", "Contact"]} cta={[{ type: "SubmitButton", props: { children: "Login", variant: "outline", size: "sm", className: "ml-4 text-indigo-600 hover:text-indigo-500" }]} sticky={true} transparent={false} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer className="text-center" logo="LuxuryShoes" copyright=" 2025 LuxuryShoes. All rights reserved." sections={[{ type: "Heading", props: { children: "Quick Links", level: 4, className: "text-gray-800 font-medium mb-2" } }, { type: "FlexColumn", props: { children: [{ type: "Link", props: { children: "Home" } }, { type: "Link", props: { children: "Products" } }, { type: "Link", props: { children: "About" } }, { type: "Link", props: { children: "Contact" } }], align: "text-left", className: "text-gray-600 hover:text-indigo-600" } }, { type: "Heading", props: { children: "Account", level: 4, className: "text-gray-800 font-medium mb-2" } }, { type: "FlexColumn", props: { children: [{ type: "Link", props: { children: "My Account" } }, { type: "Link", props: { children: "Order History" } }, { type: "Link", props: { children: "Wishlist" } }], align: "text-left", className: "text-gray-600 hover:text-indigo-600" } }, { type: "Heading", props: { children: "Support", level: 4, className: "text-gray-800 font-medium mb-2" } }, { type: "FlexColumn", props: { children: [{ type: "Link", props: { children: "Help Center" } }, { type: "Link", props: { children: "Shipping & Returns" } }, { type: "Link", props: { children: "Privacy Policy" } }, { type: "Link", props: { children: "Terms of Service" } }], align: "text-left", className: "text-gray-600 hover:text-indigo-600" } }]} socialLinks={[{ type: "Link", props: { children: "Instagram" } }, { type: "Link", props: { children: "Twitter" } }, { type: "Link", props: { children: "Facebook" } }]} />
    </BrowserRouter>
  )
}