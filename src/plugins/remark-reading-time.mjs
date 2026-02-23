import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
  return (tree, file) => {
    console.log("Remark plugin running for file:", file.path);

    const text = toString(tree);
    const readingTime = getReadingTime(text);

    // Safe way: ensure astro object exists
    if (!file.data.astro) {
      file.data.astro = {};
    }
    if (!file.data.astro.frontmatter) {
      file.data.astro.frontmatter = {};
    }

    // Set the value
    file.data.astro.frontmatter.readTime = readingTime.text;
  };
}
