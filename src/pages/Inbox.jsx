import { FilloutStandardEmbed } from "@fillout/react";
import './Inbox.css'

function Inbox() {
  return (
    <div className="form-div">
        <h1>Inbox</h1>
        <h2>Submission Rules</h2>
        <p>Any submission content won't be considered if it contains any of these:</p>
        <ul className="rules-list">
            <li><b>NSFW / Sexual content</b> <i>(suggestive is fine but I'm not posting anything explicit)</i></li>
            <li><b>Spam or advertising</b></li>
            <li><b>Malicious links or files</b></li>
        </ul>
        <FilloutStandardEmbed filloutId="qophmY7MXCus" className="form-inbox" />
    </div>
  );
}

export default Inbox;