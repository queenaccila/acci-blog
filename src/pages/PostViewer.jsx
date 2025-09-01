import { useParams } from "react-router-dom";
import { posts } from "../content/PostIndex";
import { useNavigate } from 'react-router-dom';
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
            <h2>Post not found</h2>
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
        </div>
  );
}

export default PostViewer;