import { useState } from "react";
import { Link } from 'react-router-dom';
import './Posts.css'
import { posts, getRecentPosts, paginatePosts } from '../content/PostIndex';
import { motion } from "framer-motion";

import { IconContext } from "react-icons";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

function RecentPosts() {
  // Local state for the current page
  const [page, setPage] = useState(1);

  // Get posts
  const recentPosts = getRecentPosts(posts);
  const pages = paginatePosts(recentPosts, 15);

  const currentPagePosts = pages[page - 1] || [];

  return (
    <div className="post-div">
      <h1>Recent Posts</h1>

      <motion.div
        initial = {{ opacity: 0, y: 20 }}
        animate = {{ opacity: 1, y: 0 }}
        transition= {{ transition: 0.5 }}
      >
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
              <Link to={`/posts/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Simple pagination navigation */}
      <div className="pagination">
        <IconContext.Provider value={{ size: "2.5rem", className: "arrow-button" }}>
        {page > 1 && (
          <button onClick={() => setPage(page - 1)} className="page-button"><IoMdArrowDropleft /></button>
        )}
        <span> Page {page} of {pages.length} </span>
        {page < pages.length && (
          <button onClick={() => setPage(page + 1)} className="page-button"><IoMdArrowDropright /></button>
        )}
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default RecentPosts;
