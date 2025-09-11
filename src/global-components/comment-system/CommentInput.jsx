import { useState, useEffect } from "react";
import { FaGoogle, FaDiscord, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import AnonFile from "../../assets/tumblr-icon.png";
import "./CommentInput.css";

import { signInWithProvider, signOut, getUser } from "./SignInFunctions";

function CommentInput({ handleSubmitExternal }) {
  const [comment, setComment] = useState("");
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  const [user, setUser] = useState(null); // Store current user
  const [loading, setLoading] = useState(true);

  // Fetch user session on component mount
  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getUser();
      setUser(currentUser);
      setLoading(false);
    };
    fetchUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      setShowSignInPopup(true); // Show popup if user isn't signed in
      return;
    }
    if (!comment.trim()) return; // Prevent empty comment
    handleSubmitExternal(comment, user); // Pass user info along with comment
    setComment("");
  };

  const handleSignIn = async (provider) => {
    const { error } = await signInWithProvider(provider);
    if (!error) {
      console.log("Redirecting to provider for authentication...");
      // Supabase will redirect; on return, session will update automatically
    }
  };

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (!error) {
      setUser(null);
      console.log("User signed out");
    }
  };

  // Show loading state while checking session
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
                onClick={() => handleSignIn("google")}
                className="sign-in-button"
              >
                <FaGoogle />
              </button>
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
