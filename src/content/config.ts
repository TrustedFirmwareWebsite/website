import { z, defineCollection, reference } from "astro:content";
const pages = defineCollection({
  type: "content",
  schema: z
    .object({
      flow: z
        .array(
          z.object({
            row: reference("rows"),
            sections: z
              .array(
                z
                  .object({
                    component: reference("sections"),
                  })
                  .catchall(z.any())
              )
              .optional(),
          })
        )
        .optional(),
    })
    .catchall(z.any())
    .optional(),
});

const rows = defineCollection({
  type: "content",
  schema: z.object({
    path: z.string(),
  }),
});

const sections = defineCollection({
  type: "content",
  schema: z.object({
    path: z.string(),
  }),
});

const data = defineCollection({
  type: "data",
  schema: z.any(),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icons: z.array(z.string()),
    calls_to_action: z.array(
      z.object({
        text: z.string(),
        style: z.string().optional(),
        url: z.string(),
      })
    ),
    links: z.array(
      z.object({
        title: z.string(),
        text: z.string(),
        url: z.string().url(),
      })
    ),
    useful_links: z
      .array(
        z.object({
          text: z.string(),
          url: z.string().url(),
        })
      )
      .optional(),
    top_text: z.string(),
    sort_key: z.number(),
  }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { pages, rows, sections, data, projects };
