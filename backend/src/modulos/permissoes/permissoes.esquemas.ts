import { z } from "zod";

export const esquemaCriarPermissao = z.object({
  associadoId: z.string().uuid(),
  tipoPermissao: z.string().min(2),
  ativa: z.boolean().default(true),
  dataInicio: z.string().datetime(),
  dataFim: z.string().datetime().optional().nullable(),
  quota: z.coerce.number().int().min(0).optional().nullable(),
});

export const esquemaAtualizarPermissao = esquemaCriarPermissao.partial();

export const esquemaListarPermissoes = z.object({
  busca: z.string().optional(),
  associadoId: z.string().uuid().optional(),
  ativas: z.coerce.boolean().optional(),
  pagina: z.coerce.number().int().min(1).default(1),
  porPagina: z.coerce.number().int().min(1).max(100).default(20),
});

export const esquemaAlternarPermissao = z.object({
  ativa: z.boolean(),
});

export type EntradaCriarPermissao = z.infer<typeof esquemaCriarPermissao>;
export type EntradaAtualizarPermissao = z.infer<typeof esquemaAtualizarPermissao>;
export type EntradaAlternarPermissao = z.infer<typeof esquemaAlternarPermissao>;
