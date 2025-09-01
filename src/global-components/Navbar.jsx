import './Navbar.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import HomeDirect from "./HomeDirect";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HomeDirect />

      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
      </button>

      <ul className={`navbar ${isOpen ? "open" : ""}`}>
        <li className="navbar-single-link"><Link to="/about">About</Link></li>
        <li className="navbar-single-link"><Link to="/posts">Posts</Link></li>
        <li className="navbar-single-link"><Link to="/art">Art</Link></li>
        <li className="navbar-single-link"><Link to="/videos">Videos</Link></li>
        <li className="navbar-single-link"><Link to="/tags">Tags</Link></li>
        <li className="navbar-single-link"><a href="">Inbox</a></li>
      </ul>
    </>
  )
}

export default Navbar