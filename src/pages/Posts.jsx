import { useState } from "react";
import './Posts.css'
import { posts, getRecentPosts, paginatePosts } from '../content/PostIndex';

function RecentPosts() {
  // Local state for the current page
  const [page, setPage] = useState(1);

  // Get posts
  const recentPosts = getRecentPosts(posts);
  const pages = paginatePosts(recentPosts, 5);

  const currentPagePosts = pages[page - 1] || [];

  return (
    <div className="post-div">
      <h1>All Posts</h1>
      <ul className="post-list">
        {currentPagePosts.map(post => (
          <li key={post.frontmatter.slug} className="single-link">
            <span className="date-color">
              {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                timeZone: "America/Los_Angeles",
                year: "numeric",
                month: "short",
                day: "numeric"
              })}
            </span>
            <a href={`/posts/${post.frontmatter.slug}`}>
              {post.frontmatter.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Simple pagination navigation */}
      <div className="pagination">
        {page > 1 && (
          <button onClick={() => setPage(page - 1)}>Previous</button>
        )}
        <span> Page {page} of {pages.length} </span>
        {page < pages.length && (
          <button onClick={() => setPage(page + 1)} className="page-button">Next</button>
        )}
      </div>
    </div>
  );
}

export default RecentPosts;
