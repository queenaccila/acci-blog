import './SingleComment.css';
import AnonPic from '../../assets/tumblr-icon.png'

function SingleComment({ username, profilePic, content, createdAt }) {
    const avatarSrc = profilePic && profilePic.trim() !== '' ? profilePic : AnonPic;

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
                                // Show "time ago" style
                                const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
                                if (diffInMinutes < 1) return "Just now";
                                if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
                                const hours = Math.floor(diffInMinutes / 60);
                                return `${hours}h ago`;
                                } else {
                                // Show full date
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
        </div>
    );
}

export default SingleComment;
