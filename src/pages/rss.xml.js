import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function get() {
  return rss({
    title: "Goran Solev | Blog",
    description: "Personal blog",
    site: "https://goransolev1.netlify.app/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  })
}
