import { useEffect, useState } from "react";
import CommentInput from "./CommentInput";
import SingleComment from "./SingleComment";
import { supabase } from "./SignInFunctions";

function CommentSystem({ postSlug }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch comments from Supabase
  const fetchComments = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("comment") // ✅ Make sure table name is correct
      .select("*")
      .eq("post_id", postSlug) // current post
      .order("created_at", { ascending: true }); // Oldest first

    if (error) {
      console.error("Error fetching comments:", error.message);
    } else {
      setComments(data);
    }

    setLoading(false);
  };

  // Fetch when component mounts OR postSlug changes
  useEffect(() => {
    fetchComments();
  }, [postSlug]);

  return (
    <div className="comment-system">
      <CommentInput currentPostSlug={postSlug} />


      {/* Show loading state */}
      {loading && <p>Loading comments...</p>}

      {/* No comments yet */}
      {!loading && comments.length === 0 && <p>No comments yet. Be the first!</p>}

      {/* List of Comments */}
      <div className="comments-list">
        {comments.map((comment) => (
          <SingleComment
            key={comment.comment_id}
            username={comment.username}
            profilePic={comment.profile_pic}
            content={comment.content}
            createdAt={comment.created_at}
          />
        ))}
      </div>
    </div>
  );
}

export default CommentSystem;
