import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Etc from "./pages/Etc";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar
        logo="logo"
        children={["Men's Store"]}
        links={["Products", "Cart", "Checkout"]}
        cta={["Login"]}
        sticky={true}
        transparent={false}
        className="bg-white shadow-md"
      />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/etc" element={<Etc />} />
        </Routes>
      </main>
      <Footer
        className="text-gray-600 py-6 border-t"
        logo="logo"
        copyright=" 2025 Men's Store. All rights reserved."
        sections={["Quick Links"]}
        socialLinks={["Twitter", "Instagram", "Facebook"]}
      />
    </BrowserRouter>
  );
}