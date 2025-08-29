import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HeaderImg from './assets/blog-header.png'

import Navbar from './global-components/Navbar'
import Footer from './global-components/Footer'

import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <>
      <img src={HeaderImg} className="blog-header"/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
