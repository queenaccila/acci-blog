import './Navbar.css'

function Navbar() {
  return (
    <>
      <ul className="navbar">
        <li className="navbar-single-link"><a href="">About</a></li>
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