import './Videos.css'
import { posts, paginatePosts } from '../content/PostIndex';
import { Link } from 'react-router-dom';
import { useState } from "react";

import { IconContext } from "react-icons";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

function Videos() {
    const videoPosts = posts.filter(
        post => post.frontmatter?.tags?.includes('video') && post.videoUrl
    );

    const [page, setPage] = useState(1);
    const pages = paginatePosts(videoPosts, 3); // 3 videos per page
    const currentPagePosts = pages[page - 1] || [];

    return (
        <div className="all-videos">
            <h1>Recent Videos</h1>

            {currentPagePosts.map(post => (
                <div key={post.frontmatter.slug} className='video-card'>
                    <Link to={`/posts/${post.frontmatter.slug}`}>
                        <h2>{post.frontmatter.title}</h2>
                        <iframe
                            src={post.videoUrl}
                            title={post.frontmatter.title}
                            className={`video-iframe-${post.frontmatter.videoType}`}
                        />
                    </Link>
                </div>
            ))}

            <div className="pagination">
                <IconContext.Provider value={{ size: "2.5rem", className: "arrow-button" }}>
                {page > 1 && (
                    <button onClick={() => setPage(page - 1)} className="page-button">
                        <IoMdArrowDropleft />
                    </button>
                )}
                <span> Page {page} of {pages.length} </span>
                {page < pages.length && (
                    <button onClick={() => setPage(page + 1)} className="page-button">
                        <IoMdArrowDropright />
                    </button>
                )}
                </IconContext.Provider>
            </div>
        </div>
    );
}

export default Videos;
