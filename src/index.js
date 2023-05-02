import * as React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import './styles/index.css'
import Accueil from "./pages/Accueil"
import Propos from "./pages/Propos"
import Housing from "./pages/Housing"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import ErrorBoundary from "./pages/Error"

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Banner />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<Propos />} />
        <Route path="/:id" element={<Housing />} />
        <Route path="*" element={<ErrorBoundary />} /> 
      </Routes>
    <Footer />
  </BrowserRouter>
)