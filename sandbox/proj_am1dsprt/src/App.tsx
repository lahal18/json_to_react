
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer, Navbar } from "./components"
import HomeShop from "./pages/HomeShop"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar logo="MyBrand" cta="Sign Up" links={[{"label": "Home", "href": "/"}]} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomeShop />} />
        </Routes>
      </main>
      <Footer className="text-gray-600 py-6" logo="MyBrand" copyright="© 2023 MyBrand. All rights reserved." sections={[{"label": "Shop", "items": [{"label": "Home", "href": "/"}]}]} socialLinks={[{"label": "Instagram", "href": "https://instagram.com", "icon": "InstagramIcon"}, {"label": "Twitter", "href": "https://twitter.com", "icon": "TwitterIcon"}]} />
    </BrowserRouter>
  )
}
