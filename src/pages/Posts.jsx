import './Posts.css'
import { posts, getRecentPosts } from '../content/PostIndex';

console.log('Posts array: ', posts);

function RecentPosts({limit = 20}) {
  const recentPosts = getRecentPosts(posts, limit);

  return (
    <>
      <div className="post-div">
        <h1>Recent Posts</h1>
        <ul className="post-list">
          {recentPosts.map((post) => (
            <li key={post.frontmatter.title} className="single-link">
              <span className="date-color">{new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                timeZone: "America/Los_Angeles",
                year: "numeric",
                month: "short",
                day: "numeric"
              })}</span>{' '}
              <a href={`/posts/${post.frontmatter.slug || post.frontmatter.title.replace(/\s+/g, '-').toLowerCase()}`}>
                {post.frontmatter.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default RecentPosts
