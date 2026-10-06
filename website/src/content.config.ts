import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The geographic backbone: every town belongs to a county,
// and every story and piece of work is tagged with a town.
const counties = defineCollection({
  loader: file('src/data/counties.json'),
  schema: z.object({
    name: z.string(),
    order: z.number(),
    blurb: z.string(),
  }),
});

const towns = defineCollection({
  loader: file('src/data/towns.json'),
  schema: z.object({
    name: z.string(),
    county: reference('counties'),
    blurb: z.string().optional(),
  }),
});

// Blog posts about towns and the businesses in them.
const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/stories' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    town: reference('towns'),
    summary: z.string(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Portfolio pieces / case studies.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/work' }),
  schema: z.object({
    client: z.string(),
    businessType: z.string(),
    town: reference('towns'),
    date: z.coerce.date(),
    services: z.array(z.string()),
    summary: z.string(),
    video: z.string().url().optional(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { counties, towns, stories, work };
