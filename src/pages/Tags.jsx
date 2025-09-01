import './Tags.css'
import { useState } from "react";
import { Link } from 'react-router-dom';
import { posts } from '../content/PostIndex';

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

    // Filter posts if a tag is selected
    const filteredPosts = selectedTag
        ? posts.filter(post => post.frontmatter?.tags?.includes(selectedTag))
        : [];

    return (
        <div>
            <h1>Post Tags</h1>

            {/* tag list */}
            <div className="tag-container">
                {Object.entries(tagCounts).map(([tag, count]) => (
                    <button
                        key={tag}
                        className={`tag-button ${selectedTag === tag ? 'active' : ''}`}
                        onClick={() => setSelectedTag(tag)}
                    >
                        {tag} ({count})
                    </button>
                ))}
            </div>

            {/* show posts for the selected tag */}
            {selectedTag && (
                <div>
                    <h2>Posts tagged <i className="tag-text">{selectedTag}</i></h2>
                    <ul>
                        {filteredPosts.map(post => (
                            <li key={post.frontmatter.slug}>
                                <Link to={`/posts/${post.frontmatter.slug}`}>
                                    {post.frontmatter.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Tags;