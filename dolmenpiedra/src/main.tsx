import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar.tsx'
import Home from './pages/home.tsx'
import Products from './pages/Products.tsx'
import Footer from './components/Footer.tsx' 
import Contact from './pages/contact.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Products />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
