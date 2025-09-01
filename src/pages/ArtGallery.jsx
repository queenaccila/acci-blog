import './ArtGallery.css';
import { posts } from '../content/PostIndex';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function ArtGallery() {
    // filter posts based on the art tag
    const artPosts = posts.filter(
        post => post.frontmatter?.tags?.includes('art') && post.mainImage
    );

    const container = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {
            staggerChildren: 0.1, // delay between each image
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        },
    };

    return (
        <div className="gallery-container">
            <h1>Art Gallery</h1>
            <motion.div 
                className="gallery-grid"
                variants={container}
                initial="hidden"
                animate="show"
            >
            {artPosts.map(post => (
                <Link 
                    key={post.frontmatter.slug} 
                    to={`/posts/${post.frontmatter.slug}`} 
                    className="gallery-item"
                >
                <motion.div
                    variants={item}
                    whileHover={{ scale: 1.1 }}
                >
                    <img 
                        src={post.mainImage} 
                        alt={post.frontmatter.title} 
                        loading="lazy" 
                    />
                </motion.div>
                </Link>
            ))}
            </motion.div>
        </div>
    );
}

export default ArtGallery;
