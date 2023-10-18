import { boolean } from "astro/zod";
import { z, defineCollection, reference } from "astro:content";
const pages = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      hero: z
        .object({
          title: z.string(),
          background_image: image().optional(),
          style: z.string().optional(),
          inner_image: z
            .object({
              src: image(),
              alt: z.string(),
            })
            .optional(),
        })
        .optional(),
      flow: z
        .array(
          z
            .object({
              row: reference("rows"),
              sections: z.array(
                z
                  .object({
                    component: reference("sections"),
                  })
                  .catchall(z.any())
              ),
            })
            .catchall(z.any())
        )
        .optional(),
    }),
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
  schema: ({ image }) =>
    // members/project partners
    z
      .array(
        z.object({
          image: image(),
          name: z.string(),
          type: z.enum(["diamond", "platinum", "general", "partner"]),
          url: z.string(),
        })
      )
      .or(
        //footer
        z.object({
          copyright_text: z.string(),
          footer_brand: z.object({
            logo: image(),
          }),
          social_media_icons: z.boolean(),
          company_links: z.array(
            z.object({
              name: z.string(),
              url: z.string(),
            })
          ),
        })
      )
      .or(z.any()),
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
        button_style: z.string().optional(),
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

const news = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: reference("authors"),
      title: z.string(),
      date: z.date(),
      image: image(),
    }),
});

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: reference("authors"),
      title: z.string(),
      date: z.date(),
      image: image(),
    }),
});

const meetings = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: reference("authors"),
      title: z.string(),
      date: z.date(),
      image: image(),
    }),
});

const authors = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      username: z.string(),
      email: z.string().email().optional(),
      image: image(),
    }),
});

export const collections = {
  pages,
  rows,
  sections,
  data,
  projects,
  news,
  blog,
  authors,
  meetings,
};
