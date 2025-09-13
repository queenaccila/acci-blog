import { useState, useEffect } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import AnonFile from "../../assets/tumblr-icon.png";
import "./CommentInput.css";

import { supabase, signInWithProvider, signOut, getUser } from "./SignInFunctions";

function CommentInput({ currentPostSlug, onNewComment }) {
    const [comment, setComment] = useState("");
    const [showSignInPopup, setShowSignInPopup] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // fetch user session
    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await getUser();
            setUser(currentUser);
            setLoading(false);
        };
        fetchUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            setShowSignInPopup(true);
            return;
        }

        const trimmedComment = comment.trim();
        if (!trimmedComment) return;

        const { data, error } = await supabase
        .from("comment")
        .insert([
            {
                post_id: currentPostSlug,
                user_id: user.id,
                username: user.user_metadata?.full_name || user.email,
                profile_pic: user.user_metadata?.avatar_url || null,
                content: trimmedComment,
                is_deleted: false,
            },
        ])
        .select(); // returns inserted rows

        if (error) console.error(error);
        else {
        setComment(""); // clear textarea
        if (onNewComment) onNewComment(data[0]); // update parent state
        }
    };

    const handleSignIn = async (provider) => {
        const { error } = await signInWithProvider(provider);
        if (!error) {
            console.log("Redirecting to provider for authentication...");
        } else {
            console.error("Sign-in error:", error.message);
        }
    };

    const handleSignOut = async () => {
        const { error } = await signOut();
        if (!error) {
            setUser(null);
            console.log("User signed out");
        } else {
            console.error("Sign-out error:", error.message);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="comment-input-container">
            <h2>Comments</h2>

            {/* Sign In Buttons */}
            {!user && (
                <div>
                    <p>Sign in to comment:</p>
                    <div className="sign-in-container">
                        <IconContext.Provider value={{ size: "1.5rem" }}>
                            <button
                                onClick={() => handleSignIn("discord")}
                                className="sign-in-button"
                            >
                                <FaDiscord />
                            </button>
                            <button
                                onClick={() => handleSignIn("github")}
                                className="sign-in-button"
                            >
                                <FaGithub />
                            </button>
                        </IconContext.Provider>
                    </div>
                </div>
            )}

            {/* Logged-In User Info */}
            {user && (
                <div className="user-container">
                    <div className="user-info">
                        <img
                            src={user.user_metadata?.avatar_url || AnonFile}
                            alt="User avatar"
                            className="user-icon"
                        />
                        <p className="username">
                            {user.user_metadata?.full_name || user.email}
                        </p>
                    </div>
                    <button
                        className="logout-btn"
                        onClick={handleSignOut}
                    >
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
