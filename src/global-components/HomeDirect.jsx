import './HomeDirect.css'
import { Link } from "react-router-dom";

function HomeDirect() {
  return (
    <div className="header">
        <h2 className="header-text"><Link to="/">Acci's Blog</Link></h2>
    </div>
  )
}

export default HomeDirect