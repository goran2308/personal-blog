export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

export function formatBlogPosts(
  posts,
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit = undefined,
  } = {}
) {
  const filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = post.frontmatter
    // filterOutDrafts if true
    if (filterOutDrafts && draft) return acc

    // filterOutFuturePosts if true
    if (filterOutFuturePosts && new Date(date) > new Date()) return acc

    // add post to acc
    acc.push(post)

    return acc
  }, [])

  // sortByDate or randomize
  if (sortByDate) {
    filteredPosts.sort(
      (a, b) =>
        new Date(b.frontmatter.pubDate) - new Date(a.frontmatter.pubDate)
    )
  } else {
    filteredPosts.sort(() => Math.random() - 0.5)
  }

  // limit if number is passed
  if (typeof limit === "number") {
    return filteredPosts.slice(0, limit)
  }
  return filteredPosts
}
