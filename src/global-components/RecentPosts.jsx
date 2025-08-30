import './RecentPosts.css';
import { posts, getRecentPosts } from '../content/PostIndex';

console.log('All posts:', posts);  // <-- Check what your glob imported
const recentPosts = getRecentPosts(posts, 5);
console.log('Recent posts:', recentPosts); // <-- Check after filtering drafts

function RecentPosts({ limit = 5 }) {
  const recentPosts = getRecentPosts(posts, limit);

  return (
    <div className="recent-posts">
      <ul>
        {recentPosts.map((post) => {
          const formattedDate = new Date(post.frontmatter.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          });

          return (
            <li key={post.frontmatter.title}>
              <span className="post-date">{formattedDate}</span>{' '}
              <a
                href={`/posts/${post.frontmatter.slug || post.frontmatter.title.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {post.frontmatter.title}
              </a>
              <small>({post.source})</small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RecentPosts;
