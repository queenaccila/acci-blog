import './Navbar.css'
import { Link } from "react-router-dom";
import HomeDirect from "./HomeDirect";

function Navbar() {
  return (
    <>
      <HomeDirect />
      <ul className="navbar">
        <li className="navbar-single-link"><Link to="/about">About</Link></li>
        <li className="navbar-single-link"><a href="">Posts</a></li>
        <li className="navbar-single-link"><a href="">Art</a></li>
        <li className="navbar-single-link"><a href="">Videos</a></li>
        <li className="navbar-single-link"><a href="">Inbox</a></li>
      </ul>
    </>
  )
}

export default Navbar