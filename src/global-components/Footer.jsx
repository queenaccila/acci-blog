import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaItchIo } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div className="entire-footer">
        <p className="copyright-text">© 2025 - Accila / Helen Ho</p>
        <ul className="social-media">
            <IconContext.Provider value={{ size: "1.5rem" }}>
            <li className="social-media-link"><a href="https://github.com/queenaccila"><FaGithub /></a></li>
            <li className="social-media-link"><a href="https://queenaccila.itch.io/"><FaItchIo /></a></li>
            <li className="social-media-link"><a href="https://www.youtube.com/@accila"><FaYoutube /></a></li>
            <li className="social-media-link"><a href="https://bsky.app/profile/queenaccila.bsky.social"><FaBluesky /></a></li>
            <li className="social-media-link"><a href="https://www.linkedin.com/in/helen-ho-5a496724a/"><FaLinkedin /></a></li>
            </IconContext.Provider>
        </ul>
    </div>
  )
}

export default Footer