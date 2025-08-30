export const posts = Object.entries(
    import.meta.glob('./posts/**/*.mdx', { eager: true })
).map(([path, mod]) => ({
    component: mod.default,
    frontmatter: mod.frontmatter,
    source: path
}));

export function getRecentPosts(posts, limit = 20) {
  return posts
    .filter(post => post.frontmatter && post.frontmatter.draft === false)
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    .slice(0, limit);
}

export function getSortedPosts(posts) {
  return posts
    .filter(post => post.frontmatter && post.frontmatter.draft === false)
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
}

export function paginatePosts(posts, perPage = 20) {
  const pages = [];
  for (let i = 0; i < posts.length; i += perPage) {
    pages.push(posts.slice(i, i + perPage));
  }
  return pages;
}