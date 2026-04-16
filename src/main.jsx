import React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ScrollToTop from './components/ScrollToTop'
import './styles/index.css'
import 'swiper/css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />   {/* 👈 ADD THIS */}
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
