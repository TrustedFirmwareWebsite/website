import { z, defineCollection } from "astro:content";
const pages = defineCollection({
  type: "content",
  schema: z.any(),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { pages };
