import { useState } from "react";
import { FaGoogle, FaDiscord, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import AnonFile from "../../assets/tumblr-icon.png";
import './CommentInput.css';

function CommentInput({ user, handleSignIn, handleSignOut, handleSubmitExternal }) {
    const [comment, setComment] = useState("");
    const [showSignInPopup, setShowSignInPopup] = useState(false);
    const [signIn, setSignIn] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user) {
            setShowSignInPopup(true); // Show popup if user isn't signed in
            return;
        }
        if (!comment.trim()) return; // Prevent empty comment
        handleSubmitExternal(comment);
        setComment("");
    };

    return (
        <div className="comment-input-container">
            <h2>Comments</h2>

            {!signIn && (
                <div>
                    <p>Sign in to comment:</p>
                    <div className="sign-in-container">
                        <IconContext.Provider value={{ size: '1.5rem' }}>
                            <button onClick={() => handleSignIn("google")} className="sign-in-button">
                                <FaGoogle />
                            </button>
                            <button onClick={() => handleSignIn("discord")} className="sign-in-button">
                                <FaDiscord />
                            </button>
                            <button onClick={() => handleSignIn("github")} className="sign-in-button">
                                <FaGithub />
                            </button>
                        </IconContext.Provider>
                    </div>
                </div>
            )}

            {signIn && (
                <div className="user-container">
                    <div className="user-info">
                        <img
                            src={AnonFile}
                            alt={"Anonymous"}
                            className="user-icon"
                        />
                        <p className="username">
                            This is my username
                        </p>
                    </div>
                    <button className="logout-btn" onClick={handleSignOut}>
                        Logout
                    </button>
                </div>
            )}

            {/* Comment Input Form */}
            <form onSubmit={handleSubmit} className="comment-form">
                <textarea
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

            {/* Sign-in Popup */}
            {showSignInPopup && (
                <div className="signin-popup">
                    <p>You need to sign in to comment!</p>
                    <button
                        className="close-popup"
                        onClick={() => setShowSignInPopup(false)}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
}

export default CommentInput;
