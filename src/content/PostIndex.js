// Main posts
export const posts = Object.entries(
  import.meta.glob('./posts/**/*.mdx', { eager: true })
).map(([path, mod]) => ({
  component: mod.default,
  frontmatter: mod.frontmatter,
  source: path,
  type: "post"
}));

// Art posts
export const artPosts = Object.entries(
  import.meta.glob('./art/**/*.mdx', { eager: true })
).map(([path, mod]) => ({
  component: mod.default,
  frontmatter: mod.frontmatter,
  source: path,
  type: "art"
}));

// Video posts
export const videoPosts = Object.entries(
  import.meta.glob('./videos/**/*.mdx', { eager: true })
).map(([path, mod]) => ({
  component: mod.default,
  frontmatter: mod.frontmatter,
  source: path,
  type: "video"
}));

// Showcase posts
export const showcasePosts = Object.entries(
  import.meta.glob('./videos/**/*.mdx', { eager: true })
).map(([path, mod]) => ({
  component: mod.default,
  frontmatter: mod.frontmatter,
  source: path,
  type: "showcase"
}));

// All types of posts together
export const allPosts = [posts, artPosts, videoPosts, showcasePosts];

// get recent posts for the page
export function getRecentPosts(posts, limit = 5) {
  return posts
    .filter(post => post.frontmatter && post.frontmatter.draft === false) // skip drafts
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    .slice(0, limit);
}