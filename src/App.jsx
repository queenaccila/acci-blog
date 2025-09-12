import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import HeaderImg from './assets/blog-header.png'

import Navbar from './global-components/Navbar'
import Footer from './global-components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import RecentPosts from './pages/Posts'
import PostViewer from './pages/PostViewer'
import ArtGallery from "./pages/ArtGallery"
import Videos from './pages/Videos'
import Tags from './pages/Tags'
import Inbox from './pages/Inbox'

function App() {
  return (
    <>
      <img src={HeaderImg} className="blog-header"/>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/posts" element={<RecentPosts />}></Route>
          <Route path="/posts/:slug" element={<PostViewer />}></Route>
          <Route path="/art" element={<ArtGallery />}></Route>
          <Route path="/videos" element={<Videos />}></Route>
          <Route path="/tags" element={<Tags />}></Route>
          <Route path="/inbox" element={<Inbox />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App
