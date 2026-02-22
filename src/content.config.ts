// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({
    // Where your Markdown files live (create this folder if needed)
    base: './src/content/posts',
    // Match .md and .mdx files (exclude drafts like _draft.md if you want)
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    date: z.coerce.date(), // or z.coerce.date() if your dates are strings like '2025-10-15'
    tags: z.array(z.string()).optional().default([]),
    description: z.string().optional(),
    draft: z.boolean().optional().default(false),
    excerpt: z.string().nullish(), // Optional field for a short summary
    thumbnail: z.string().nullish(), // e.g. "/thumbnails/my-post.jpg"
    readTime: z.string().optional(),
    // Add more fields as needed
  }),
});

export const collections = {
  posts, // Key name = collection name you'll use in getCollection('posts')
};