import { z } from "zod";

export const statusMensalidade = z.enum(["pendente", "pago", "atrasado"]);

export const esquemaCriarMensalidade = z.object({
  associadoId: z.string().uuid(),
  competencia: z.string().regex(/^\d{4}-\d{2}$/),
  valor: z.coerce.number().positive(),
  dataVencimento: z.string().datetime(),
  status: statusMensalidade.default("pendente"),
  dataPagamento: z.string().datetime().optional().nullable(),
});

export const esquemaAtualizarMensalidade = esquemaCriarMensalidade.partial();

export const esquemaListarMensalidades = z.object({
  associadoId: z.string().uuid().optional(),
  status: statusMensalidade.optional(),
  competencia: z.string().regex(/^\d{4}-\d{2}$/).optional(),
  pagina: z.coerce.number().int().min(1).default(1),
  porPagina: z.coerce.number().int().min(1).max(100).default(20),
});

export const esquemaRegistrarPagamento = z.object({
  dataPagamento: z.string().datetime().optional(),
});

export type EntradaCriarMensalidade = z.infer<typeof esquemaCriarMensalidade>;
export type EntradaAtualizarMensalidade = z.infer<typeof esquemaAtualizarMensalidade>;
export type EntradaRegistrarPagamento = z.infer<typeof esquemaRegistrarPagamento>;
