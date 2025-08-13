import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const articles = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/articles" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = { articles };
