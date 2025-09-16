import acciLogo from '../assets/acci-logo.png'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { posts, getTopRecentPosts } from '../content/PostIndex';
import PixelDivider from '../assets/pixel-heart-header.gif'
import './Home.css'
import './Posts.css'

function Home() {
  // Get the top 5 most recent posts
  const topRecentPosts = getTopRecentPosts(posts, 5);

  // Filter posts based on the art or photo tag
  const displayedPosts = posts.filter(
    post =>
      (post.frontmatter?.tags?.includes('art') || post.frontmatter?.tags?.includes('photo')) &&
      post.mainImage
  );

  return (
    <div className='main-div'>
      <img src={acciLogo} className="acci-logo" loading="lazy" />
      <h1 className="title-style">Acci's Blog</h1>
      <div className="description">
        <h3 className="description-header">She/Her ✦ 23 ✦ Sep 29th ✦ PST</h3>
        <p className="description-text">
          My cozy corner of the internet where I share my projects, art, and general thoughts on things I like.
        </p>
      </div>

      <img src={PixelDivider} className='header-img' />

      {/* Recent Posts Section */}
      <div className="recent-posts">
        <h2>Recent Posts</h2>
        <ul className="post-list">
          {topRecentPosts.map(post => (
            <li key={post.frontmatter.slug} className="single-link">
              <span className="date-color">
                {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                  timeZone: "America/Los_Angeles",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <Link to={`/posts/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
        <h3><Link to="/posts" className='recent-posts-link'>All posts</Link></h3>
      </div>

      <img src={PixelDivider} className='header-img' />

      {/* Recent Art & Photos Section */}
      <div className='recent-posts'>
        <h2 className='recent-posts-link'>Recent Art & Photos</h2>
        <div className="gallery-grid">
          {displayedPosts.map(post => (
            <Link key={post.frontmatter.slug} to={`/posts/${post.frontmatter.slug}`}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <div className="gallery-card">
                  <img
                    src={post.mainImage}
                    alt={post.frontmatter.title}
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        <h3><Link to="/art" className='recent-posts-link'>All art + photos</Link></h3>
      </div>
    </div>
  );
}

export default Home;
