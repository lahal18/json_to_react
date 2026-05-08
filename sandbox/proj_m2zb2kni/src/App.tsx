
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Footer, Navbar } from "./components"
import SingleShowcasePage from "./pages/SingleShowcasePage"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar logo="WatchCo" children="Watches" className="bg-indigo-600 text-white p-4 shadow-md" links={[{"label": "Home", "href": "/"}, {"label": "Shop", "href": "/shop"}, {"label": "About", "href": "/about"}, {"label": "Contact", "href": "/contact"}]} cta={[{"label": "Login", "href": "/login", "variant": "outline"}]} sticky={true} transparent={false} />
      <main className="min-h-screen">
        <Routes>
          <Route path="/singleshowcasepage" element={<SingleShowcasePage />} />
        </Routes>
      </main>
      <Footer className="bg-gray-100 text-gray-600 py-6" logo="WatchCo" copyright="© 2025 WatchCo. All rights reserved." sections={[{"title": "Quick Links", "items": [{"label": "Home", "href": "/"}, {"label": "Shop", "href": "/shop"}, {"label": "Blog", "href": "/blog"}]}, {"title": "Legal", "items": [{"label": "Privacy Policy", "href": "/privacy"}, {"label": "Terms", "href": "/terms"}]}, {"title": "Social", "items": [{"label": "Instagram", "href": "https://instagram.com/watchco"}, {"label": "Twitter", "href": "https://twitter.com/watchco"}, {"label": "Facebook", "href": "https://facebook.com/watchco"}]}]} socialLinks={[{"icon": "Instagram", "url": "https://instagram.com/watchco"}, {"icon": "Twitter", "url": "https://twitter.com/watchco"}, {"icon": "Facebook", "url": "https://facebook.com/watchco"}]} />
    </BrowserRouter>
  )
}
