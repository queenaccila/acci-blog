import './ArtGallery.css';
import { posts } from '../content/PostIndex';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useState } from "react";

function ArtGallery() {
    const [selectedTab, setSelectedTab] = useState("art");

    // filter posts based on the art or photo tag
    const artPosts = posts
    .filter(
        post => post.frontmatter?.tags?.includes('art') && post.mainImage
    )
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

    const photoPosts = posts
    .filter(
        post => post.frontmatter?.tags?.includes('photos') && post.mainImage
    )
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));


    const displayedPosts = selectedTab === "art" ? artPosts : photoPosts;

    const container = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {
            staggerChildren: 0.2, // delay between each image
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
            {/* Tabs */}
            <div className="tab-buttons">
                <button
                    className={`tab-button ${selectedTab === "art" ? "active" : ""}`}
                    onClick={() => setSelectedTab("art")}
                >
                    Art
                </button>
                <button
                    className={`tab-button ${selectedTab === "photos" ? "active" : ""}`}
                    onClick={() => setSelectedTab("photos")}
                >
                    Photos
                </button>
            </div>

            <motion.div 
                className="gallery-grid"
                variants={container}
                initial="hidden"
                animate="show"
            >
            {displayedPosts.map(post => (
                    <Link key={post.frontmatter.slug} to={`/posts/${post.frontmatter.slug}`}>
                        <motion.div 
                            variants={item}
                            whileHover={{ scale: 1.1 }}
                        >
                        <div className="gallery-card">
                            <img
                                src={post.frontmatter.mainImage}
                                alt={post.frontmatter.title}
                                className="gallery-img"
                            />
                        </div>
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </div>
    );
}

export default ArtGallery;
