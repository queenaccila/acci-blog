import { Link } from "react-router-dom";

function InboxSubmission({
    text, submissionImg, username, userUrl, userIcon
}) {
    const isNotAnon = !!username && !!userUrl && !!userIcon;

    return (
        <div className={`submission ${isNotAnon ? "with-user" : "simple"}`}>
            {/* main submission text */}
            <div>
                <p>{text}</p>
            </div>

            {/* optional image submission */}
            {submissionImg && (
                <img src={submissionImg}/>
            )}
            
            {/* non-anon submissions */}
            {isNotAnon && (
                <div>
                    <img src={userIcon}/>
                    <p><Link to={userUrl}>{username}</Link></p>
                </div>
            )}
        </div>
    );
}