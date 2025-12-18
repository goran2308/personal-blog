export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export async function formatBlogPosts(
  posts,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {}
) {
  if (!posts) return [];

  // if posts is an object (import.meta.glob / Astro.glob), convert to array
  if (!Array.isArray(posts)) {
    const vals = Object.values(posts);

    // lazy import functions (import.meta.glob without eager)
    if (vals.length && typeof vals[0] === "function") {
      // call each importer and await modules
      const modules = await Promise.all(vals.map((fn) => fn()));
      posts = modules;
    } else {
      // already modules (eager glob) or plain object values
      posts = vals;
    }
  }

  const filteredPosts = posts.reduce((acc, post) => {
    const { pubDate, draft } = post.frontmatter || {};
    if (filterOutDrafts && draft) return acc;
    if (filterOutFuturePosts && new Date(pubDate) > new Date()) return acc;
    acc.push(post);
    return acc;
  }, []);

  if (sortByDate) {
    filteredPosts.sort(
      (a, b) =>
        new Date(b.frontmatter.pubDate) - new Date(a.frontmatter.pubDate)
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  if (typeof limit === "number") return filteredPosts.slice(0, limit);
  return filteredPosts;
}
