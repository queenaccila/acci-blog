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
        <p className="copyright-text">© 2025 - Accila</p>
        <ul className="social-media">
            <IconContext.Provider value={{ size: "1.5rem" }}>
            <li className="social-media-link"><a href=""><FaGithub /></a></li>
            <li className="social-media-link"><a href=""><FaItchIo /></a></li>
            <li className="social-media-link"><a href=""><FaYoutube /></a></li>
            <li className="social-media-link"><a href=""><FaBluesky /></a></li>
            <li><a href=""><FaLinkedin /></a></li>
            </IconContext.Provider>
        </ul>
    </div>
  )
}

export default Footer