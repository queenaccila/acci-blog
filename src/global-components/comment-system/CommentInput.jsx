import { useState } from "react";
import { FaGoogle, FaDiscord, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import AnonFile from "../../assets/tumblr-icon.png"
import './CommentInput.css';

function CommentInput({ user, handleSignIn, handleSignOut, handleSubmitExternal }) {
    const [comment, setComment] = useState("");
    const [signedIn, setSignedIn] = useState(true);
    const [showSignInPopup, setShowSignInPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user) {
            setShowSignInPopup(true);
        return;
        }
        if (!comment.trim()) return;
            handleSubmitExternal(comment);
            setComment("");
    };

return (
    <div className="comment-input-container">
        <h2>Comments</h2>
        <p>Sign in to comment:</p>

        {/* The sign in buttons will eventually be toggled if user is signed in or not */}
        <div className="sign-in-container">
            <IconContext.Provider value={{ size: '2rem' }}>
                <button onClick={() => handleSignIn("google")} className="sign-in-button"><FaGoogle /></button>
                <button onClick={() => handleSignIn("discord")} className="sign-in-button"><FaDiscord /></button>
                <button onClick={() => handleSignIn("github")} className="sign-in-button"><FaGithub /></button>
            </IconContext.Provider>
        </div>

        {signedIn && (
            <div className="user-info">
                <img
                    src={AnonFile}
                    className="user-icon"
                />
                <p>Username</p>
            </div>
        )}

        <form onSubmit={handleSubmit} className="comment-form">
            <textarea
                type="text"
                placeholder="Write a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="comment-input"
                rows={5}
                maxLength={1000}
            />
            <button type="submit" className="submit-btn">
                Post
            </button>
        </form>

        {/* User not signed in popup */}
        {showSignInPopup && (
            <div className="signin-popup">
                <p>You need to sign in to comment!</p>
                <button className="close-popup" onClick={() => setShowSignInPopup(false)}>Close</button>
            </div>
        )}

        {/* If user is signed in, show their info */}
        {user && (
            <div className="user-info">
                <img
                src={user.user_metadata.avatar_url || "/default-avatar.png"}
                alt={user.user_metadata.full_name || "User"}
                className="user-avatar"
                />
                <span className="user-name">{user.user_metadata.full_name || user.email}</span>
                <button className="sign-out-btn" onClick={handleSignOut}>Sign Out</button>
            </div>
        )}
    </div>
  );
}

export default CommentInput;