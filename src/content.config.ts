import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		sortOrder: z.number().int().nonnegative(),
		year: z.number().int(),
		technologies: z.array(z.string()).min(1),
		links: z.object({
			repository: z.url().optional(),
			demo: z.url().optional(),
		}),
	}),
});

export const collections = { projects };