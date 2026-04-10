import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const imoveis = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/imoveis' }),
  schema: z.object({
    nome: z.string(),
    badge: z.string().optional(),
    imagem: z.string(),
    localizacao: z.string(),
    feature1: z.string().optional(),
    feature2: z.string().optional(),
    feature3: z.string().optional(),
    destaque: z.string().optional(),
    entrega: z.string().optional(),
    preco: z.string(),
    linkWhatsApp: z.string(),
    linkPagina: z.string().optional(),
  }),
});

export const collections = { imoveis };
