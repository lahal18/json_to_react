
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer, Navbar } from "./components"
import Home from "./pages/Home"

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div data-component-path="src/components/Navigation/Navbar.tsx" style={{ display: "contents" }}>
        <Navbar logo={"MyBrand"} cta={"Sign Up"} links={[{"label": "Home", "href": "/"}]} />
      </div>
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <div data-component-path="src/components/Navigation/Footer.tsx" style={{ display: "contents" }}>
        <Footer className={"text-center py-6 text-sm text-gray-500"} logo={"MyBrand"} copyright={"\u00a9 2023 MyBrand. All rights reserved."} sections={[{"label": "Products", "items": [{"label": "Toys", "href": "/toys"}]}]} socialLinks={[{"label": "Instagram", "href": "https://instagram.com/mybrand", "icon": "InstagramIcon"}, {"label": "YouTube", "href": "https://youtube.com/mybrand", "icon": "YouTubeIcon"}]} />
      </div>
    </BrowserRouter>
  )
}
