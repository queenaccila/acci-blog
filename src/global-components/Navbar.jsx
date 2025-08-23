import './Navbar.css'

function Navbar() {
  return (
    <>
      <ul className="navbar">
        <li className="navbar-single-link"><a href="">About</a></li>
        <li className="navbar-single-link"><a href="">Posts</a></li>
        <li className="navbar-single-link">
            <a href="">Art</a>
            <ul className="navbar-dropdown">
            <li><a href="">Originals</a></li>
            <li><a href="">Animation</a></li>
            <li><a href="">Fanart</a></li>
            </ul>
        </li>
        <li className="navbar-single-link"><a href="">Videos</a></li>
        <li className="navbar-single-link"><a href="">Inbox</a></li>
      </ul>
    </>
  )
}

export default Navbar