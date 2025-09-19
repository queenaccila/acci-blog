import { FilloutStandardEmbed } from "@fillout/react";
import { assets } from "../global-components/Assets";
import './Inbox.css'

function Inbox() {

  return (
    <div className="form-div">
        <h1>Inbox</h1>
        <p>Send me stuff or ask me anything!</p>
        <img src={assets.inbox} className="inbox-image" />
        <details className="rules-list">
          <summary className="form-text"> ₊˚⊹ᰔ Submission Rules ⭑.ᐟ</summary>
          Any submission content won't be considered if it contains any of these:
          <ul>
            <li><b>Not safe for work content</b> <i>(mature content is fine but I'm not posting anything explicit)</i></li>
            <li><b>Spam or advertising</b></li>
            <li><b>Suspicious links or files</b></li>
        </ul>
        </details>
        <img src={assets.divider} className="divider" />
        <FilloutStandardEmbed filloutId="qophmY7MXCus" className="form-inbox" />
        <img src={assets.divider} className="divider" />
    </div>
  );
}

export default Inbox;