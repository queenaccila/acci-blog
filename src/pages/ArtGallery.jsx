import './ArtGallery.css';
import { posts } from '../content/PostIndex';
import { Link } from 'react-router-dom';
import * as motion from "motion/react-client"

function ArtGallery() {
    // filter posts based on the art tag
    const artPosts = posts.filter(
    post =>
        post.frontmatter?.tags?.includes('art') && post.mainImage
    );

    return (
    <div className="gallery-container">
        <h1>Art Gallery</h1>
        <div className="gallery-grid">
        {artPosts.map(post => (
            <Link key={post.frontmatter.slug} to={`/posts/${post.frontmatter.slug}`} className="gallery-item">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.2 }}
            >
                <img src={post.mainImage} alt={post.frontmatter.title} loading="lazy" />
            </motion.div>
            </Link>
        ))}
        </div>
    </div>
    );
}

export default ArtGallery;
