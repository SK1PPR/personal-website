import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    status: z.string(),
    github: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0)
  })
});

const lab = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    area: z.string(),
    status: z.string(),
    updated: z.coerce.date(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { blog, projects, lab };
