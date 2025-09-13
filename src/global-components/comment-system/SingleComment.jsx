import './SingleComment.css';
import { supabase } from './SignInFunctions';
import AnonPic from '../../assets/tumblr-icon.png';
import { useState, useEffect } from "react";

function SingleComment({ commentId, userId, username, profilePic, content, createdAt, refreshComments }) {
    const [currentUser, setCurrentUser] = useState(null);
    const avatarSrc = profilePic && profilePic.trim() !== '' ? profilePic : AnonPic;

    // Fetch the currently signed-in user
    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getSession();
            if (error) {
                console.error("Error fetching session:", error.message);
            } else {
                setCurrentUser(data?.session?.user || null);
            }
        };
        fetchUser();
    }, []);

    // Delete comment handler
    const handleDelete = async () => {
        if (!currentUser || currentUser.id !== userId) {
            alert("You can only delete your own comments!");
            return;
        }

        const { error } = await supabase
            .from("comment")
            .update({ is_deleted: true })
            .eq("comment_id", commentId);

        if (error) {
            console.error("Error deleting comment:", error.message);
        } else {
            console.log("Comment marked as deleted!");
            refreshComments();
        }
    };

    return (
        <div className="single-comment">
            {/* User Avatar */}
            <div className="comment-avatar">
                <img
                    src={avatarSrc}
                    alt={`${username || "Anonymous"}'s avatar`}
                    className="avatar-img"
                />
            </div>

            {/* Comment Body */}
            <div className="comment-body">
                <div className="comment-header">
                    <span className="comment-username">
                        {username || "Anonymous"}
                    </span>
                    {createdAt && (
                        <span className="comment-date">
                            {(() => {
                                const now = new Date();
                                const commentTime = new Date(createdAt);
                                const diffInMs = now - commentTime;
                                const diffInHours = diffInMs / (1000 * 60 * 60);

                                if (diffInHours < 24) {
                                    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
                                    if (diffInMinutes < 1) return "Just now";
                                    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
                                    const hours = Math.floor(diffInMinutes / 60);
                                    return `${hours}h ago`;
                                } else {
                                    return commentTime.toLocaleDateString(undefined, {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    });
                                }
                            })()}
                        </span>
                    )}
                </div>
                <p className="comment-text">{content}</p>
            </div>

            {/* Show delete button only for comment owner */}
            {currentUser && currentUser.id === userId && (
                <button className="delete-btn" onClick={handleDelete}>
                    Delete
                </button>
            )}
        </div>
    );
}

export default SingleComment;
