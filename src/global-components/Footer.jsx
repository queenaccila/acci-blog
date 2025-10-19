import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { FaItchIo } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div className="entire-footer">
        <p className="copyright-text">© 2025 - Accila</p>
        <ul className="social-media">
            <IconContext.Provider value={{ size: "1.5rem" }}>
            <li className="social-media-link"><a href="https://github.com/queenaccila" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
            <li className="social-media-link"><a href="https://queenaccila.itch.io/" target="_blank" rel="noopener noreferrer"><FaItchIo /></a></li>
            <li className="newgrounds-logo"><a href="https://queenaccila.newgrounds.com/" target="_blank" rel="noopener noreferrer">NG</a></li>
            <li className="social-media-link"><a href="https://www.pinterest.com/queenaccila/" target="_blank" rel="noopener noreferrer"><FaPinterest /></a></li>
            <li className="social-media-link"><a href="https://bsky.app/profile/queenaccila.bsky.social" target="_blank" rel="noopener noreferrer"><FaBluesky /></a></li>
            <li className="social-media-link"><a href="https://www.instagram.com/queenaccila/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
            </IconContext.Provider>
        </ul>
    </div>
  )
}

export default Footer