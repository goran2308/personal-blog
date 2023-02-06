import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function get(context) {
  return rss({
    title: "Goran Solev | Blog",
    description: "Learn the web, the right way!",
    site: "https://goransolev1.netlify.app/",
    items: await pagesGlobToRssItems(import.meta.glob("./blog/*.{md,mdx}")),
    stylesheet: "rss/rss-styles.xsl",
  })
}
