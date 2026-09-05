import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"

import Services from "./pages/Services"
import ServiceDetail from "./pages/ServiceDetail";

import Portfolio from "./pages/Portfolio"
import PortfolioDetail from "./pages/PortfolioDetail";

import Blog from "./pages/Blog"
import BlogDetail from "./pages/BlogDetail";


import Careers from "./pages/Careers"
import JobDetail from "./pages/JobDetail";

import Contact from "./pages/Contact"



function App() {

  return (
    <BrowserRouter>
    <Navbar />

    <main>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/:slug"
          element={<ServiceDetail />}
        />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/portfolio/:slug"
          element={<PortfolioDetail />}
        />

        <Route path="/blog" element={<Blog />} />
        <Route 
          path="/blog/:slug"
          element={<BlogDetail />}
        />

        <Route path="/careers" element={<Careers />} />
        <Route
          path="/careers/:id"
          element={<JobDetail />}
        />


        <Route path="/contact" element={<Contact />} />
        
      
      </Routes>
    <Footer />
    </main>
    </BrowserRouter>
  )
}

export default App
