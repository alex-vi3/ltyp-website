import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const actualites = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/actualites" }),
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

export const collections = { actualites };
