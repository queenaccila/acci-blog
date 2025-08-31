// Main posts
export const posts = Object.entries(
  import.meta.glob('./posts/**/*.mdx', { eager: true })
).map(([path, mod]) => ({
  component: mod.default,
  frontmatter: mod.frontmatter,
  source: path,
}));

// get recent posts for the page
export function getRecentPosts(posts, limit = 5) {
  return posts
    .filter(post => post.frontmatter && post.frontmatter.draft === false) // skip drafts
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    .slice(0, limit);
}