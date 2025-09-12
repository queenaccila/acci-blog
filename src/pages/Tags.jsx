import './Tags.css'
import { useState } from "react";
import { Link } from 'react-router-dom';
import { posts, paginatePosts } from '../content/PostIndex';

import { IconContext } from "react-icons";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

function Tags() {
    // collects all tags + how many posts have them
    const tagCounts = posts.reduce((acc, post) => {
        const tags = post.frontmatter?.tags || [];
        tags.forEach(tag => {
            acc[tag] = (acc[tag] || 0) + 1;
        });
        return acc;
    }, {});

    const [selectedTag, setSelectedTag] = useState(null);
    const [page, setPage] = useState(1);

    // Filter posts if a tag is selected
    const filteredPosts = selectedTag
        ? posts.filter(post => post.frontmatter?.tags?.includes(selectedTag))
        : [];

    // paginate posts
    const pages = paginatePosts(filteredPosts, 10);
    const currentPagePosts = pages[page - 1] || [];
    
    return (
        <div>
            <h1>Post Tags</h1>

            {/* tag list */}
            <div className="tag-container">
                {Object.entries(tagCounts).map(([tag, count]) => (
                    <button
                        key={tag}
                        className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
                        onClick={() => {
                            setSelectedTag(tag);
                            setPage(1);
                        }}
                    >
                        {tag} ({count})
                    </button>
                ))}
            </div>

            {/* show posts for the selected tag */}
            {selectedTag && (
                <div>
                    <h2>Posts tagged <i className="tag-text">{selectedTag}</i></h2>
                    <ul className="tag-list">
                        {currentPagePosts.map(post => (
                            <li key={post.frontmatter.slug}>
                                <Link to={`/posts/${post.frontmatter.slug}`}>
                                    {post.frontmatter.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* pagination every 10 posts */}
                    <div className="pagination">
                        <IconContext.Provider value={{ size: "2rem", className: "arrow-button" }}>
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
            )}
        </div>
    );
}

export default Tags;