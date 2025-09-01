import './ArtGallery.css';
import { posts } from '../content/PostIndex';
import { Link } from 'react-router-dom';

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
            <img src={post.mainImage} alt={post.frontmatter.title} />
            </Link>
        ))}
        </div>
    </div>
    );
}

export default ArtGallery;
