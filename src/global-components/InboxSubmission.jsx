// InboxSubmissionBubble.jsx
import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import './InboxSubmission.css';

function InboxSubmission({
    text,
    submissionImg,
    username,
    userUrl,
    userIcon
}) {
    const isNotAnon = !!username && !!userUrl && !!userIcon;
    const defaultIcon = <BsPersonFill />; // replace with your default

    return (
        <div>
            <div className="bubble-container">
                <div className="bubble-user">
                    <img
                        src={isNotAnon ? userIcon : defaultIcon}
                        alt={isNotAnon ? username : "Anonymous"}
                        className="bubble-user-icon"
                    />
                    <div className="bubble-username">
                        {isNotAnon ? (
                            <Link to={userUrl} className="user-name">{username}</Link>
                        ) : (
                            <span className="user-name">Anonymous</span>
                        )}
                    </div>
                </div>

                <div className="bubble">
                    <div className="bubble-text">
                        <p>{text}</p>
                        {submissionImg && <img src={submissionImg} alt="Submission" className="bubble-image"/>}
                    </div>
                </div>
            </div>
            <hr className="space-divider"/>
        </div>
    );
}

export default InboxSubmission;
