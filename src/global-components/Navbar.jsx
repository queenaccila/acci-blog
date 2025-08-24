import './Navbar.css'
import { Link } from "react-router-dom";
import HomeDirect from "./HomeDirect";

function Navbar() {
  return (
    <>
      <HomeDirect />
      <ul className="navbar">
        <li className="navbar-single-link"><Link to="/about">About</Link></li>
        <li className="navbar-single-link">
          <a href="">Posts</a>
          <ul className="navbar-dropdown">
              <li className="navbar-dropdown-link"><a href="">General</a></li>
              <li className="navbar-dropdown-link"><a href="">Showcase</a></li>
              <li className="navbar-dropdown-link"><a href="">Devlogs</a></li>
          </ul>
        </li>
        <li className="navbar-single-link">
          <a href="">Art</a>
          <ul className="navbar-dropdown">
            <li className="navbar-dropdown-link"><a href="">Originals</a></li>
            <li className="navbar-dropdown-link"><a href="">Animation</a></li>
            <li className="navbar-dropdown-link"><a href="">Fanart</a></li>
          </ul>
        </li>
        <li className="navbar-single-link"><a href="">Videos</a></li>
        <li className="navbar-single-link"><a href="">Inbox</a></li>
      </ul>
    </>
  )
}

export default Navbar