import { useParams } from "react-router-dom";
import { posts } from "../content/PostIndex";
import { useNavigate } from 'react-router-dom';
import { assets } from "../global-components/Assets";
import CommentSystem from '../global-components/comment-system/CommentSystem'
import './PostViewer.css'

import { TbArrowBackUp } from "react-icons/tb";

function PostViewer() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const post = posts.find(
        (p) => p.frontmatter.slug === slug
    );

    if (!post) {
        return (
            <div>
                <h1>Post not found</h1>
                <img src={assets.error} className="error-image" />
                <p>Sorry about that! The page might've been removed or mislinked.</p>
            </div>
        );
    }

    const PostComponent = post.component;

    return (
        <div className="post-page">
            <button onClick={() => navigate('/posts')}>
                <TbArrowBackUp /> Back to posts
            </button>

            <h1>{post.frontmatter.title}</h1>
            <p className="post-date">
            <b>Date:</b> {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                timeZone: "America/Los_Angeles",
                year: "numeric",
                month: "short",
                day: "numeric"
            })}
            </p>
            <p><b>Tags:</b> {post.frontmatter.tags.join(', ')}</p>

            <hr/>

            {/* Render the actual MDX content */}
            <PostComponent className="post-content"/>

            <hr/>

            {/* Comment system */}
            <CommentSystem postSlug={slug}/>
        </div>
  );
}

export default PostViewer;