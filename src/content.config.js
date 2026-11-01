import { defineCollection } from 'astro:content';
import { z } from 'zod';

const workshops = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleFa: z.string().optional(),
    description: z.string(),
    descriptionFa: z.string().optional(),
    audience: z.string(),
    audienceFa: z.string().optional(),
    outcomes: z.array(z.string()),
    outcomesFa: z.array(z.string()).optional(),
    prerequisites: z.string().optional(),
    prerequisitesFa: z.string().optional(),
    duration: z.string().optional(),
    durationFa: z.string().optional(),
    format: z.string().optional(),
    formatFa: z.string().optional(),
    topics: z.array(z.string()),
    topicsFa: z.array(z.string()).optional(),
    instructors: z.array(z.string()),
    institutional: z.boolean().default(false),
    status: z.enum(['draft', 'review', 'published']).default('draft'),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleFa: z.string().optional(),
    description: z.string(),
    descriptionFa: z.string().optional(),
    category: z.enum(['advisory', 'digital-solutions']),
    details: z.array(z.string()),
    detailsFa: z.array(z.string()).optional(),
    qualificationNote: z.string().optional(),
    qualificationNoteFa: z.string().optional(),
    status: z.enum(['draft', 'review', 'published']).default('draft'),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleFa: z.string().optional(),
    summary: z.string(),
    summaryFa: z.string().optional(),
    date: z.date(),
    author: z.string(),
    authorFa: z.string().optional(),
    category: z.string(),
    categoryFa: z.string().optional(),
    readingTime: z.number(),
    content: z.string(),
    status: z.enum(['draft', 'review', 'published']).default('draft'),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

export const collections = { workshops, services, insights };
