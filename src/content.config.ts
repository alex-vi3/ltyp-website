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
    tag: z.enum(["divers", "competitions", "entrainements", "evenements"]),
  }),
});

export const collections = { actualites };
