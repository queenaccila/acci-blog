import { useState, useEffect } from "react";
import { supabase } from "./SignInFunctions";
import CommentInput from "./CommentInput";
import SingleComment from "./SingleComment";

function CommentSystem({ postSlug }) {
  const [comments, setComments] = useState([]);

  // Fetch comments from Supabase
  const fetchComments = async () => {
    const { data, error } = await supabase
      .from("comment")
      .select("*")
      .eq("post_id", postSlug)
      .order("created_at", { ascending: true });

    if (error) console.error(error);
    else setComments(data);
  };

  useEffect(() => {
    fetchComments();

    // Optional: subscribe to real-time updates
    const subscription = supabase
      .channel(`comments:${postSlug}`)
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "comment", filter: `post_id=eq.${postSlug}` },
        (payload) => {
          setComments((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [postSlug]);

  return (
    <div>
      <CommentInput
        currentPostSlug={postSlug}
        onNewComment={(comment) => setComments((prev) => [...prev, comment])}
      />

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
