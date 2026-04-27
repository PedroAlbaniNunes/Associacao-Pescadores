import { z } from "zod";

export const statusLoja = z.enum(["pendente", "aprovada", "rejeitada", "suspensa"]);

export const esquemaCriarLoja = z.object({
  associadoId: z.string().uuid(),
  nomeLoja: z.string().min(2),
  descricao: z.string().min(5),
  status: statusLoja.default("pendente"),
});

export const esquemaAtualizarLoja = esquemaCriarLoja.partial();

export const esquemaListarLojas = z.object({
  busca: z.string().optional(),
  status: statusLoja.optional(),
  associadoId: z.string().uuid().optional(),
  pagina: z.coerce.number().int().min(1).default(1),
  porPagina: z.coerce.number().int().min(1).max(100).default(20),
});

export const esquemaAtualizarStatusLoja = z.object({
  status: statusLoja,
  motivoRejeicao: z.string().optional(),
});

export type EntradaCriarLoja = z.infer<typeof esquemaCriarLoja>;
export type EntradaAtualizarLoja = z.infer<typeof esquemaAtualizarLoja>;
export type EntradaAtualizarStatusLoja = z.infer<typeof esquemaAtualizarStatusLoja>;
