import './Posts.css'
import { posts, getRecentPosts } from '../content/PostIndex';

console.log('Posts array: ', posts);

function RecentPosts({limit = 20}) {
  const recentPosts = getRecentPosts(posts, limit);

  return (
    <>
      <div className="post-list">
        <h1>Recent Posts</h1>
        <ul>
          {recentPosts.map((post) => (
            <li key={post.frontmatter.title}>
              <span>{new Date(post.frontmatter.date).toLocaleDateString()}</span>{' '}
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
