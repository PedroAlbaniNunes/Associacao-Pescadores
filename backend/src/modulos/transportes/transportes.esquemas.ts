import { z } from "zod";

export const statusTransporte = z.enum(["pendente", "em_transito", "entregue", "cancelado"]);

export const esquemaCriarTransporte = z.object({
  vendaId: z.string().uuid(),
  transportadora: z.string().optional(),
  destino: z.string().min(2),
  status: statusTransporte.default("pendente"),
  rastreamento: z.string().optional(),
  observacoes: z.string().optional(),
});

export const esquemaAtualizarTransporte = esquemaCriarTransporte.partial().omit({ vendaId: true });

export const esquemaAtualizarStatusTransporte = z.object({
  status: statusTransporte,
  rastreamento: z.string().optional(),
  observacoes: z.string().optional(),
});

export const esquemaListarTransportes = z.object({
  status: statusTransporte.optional(),
  vendaId: z.string().uuid().optional(),
  pagina: z.coerce.number().int().min(1).default(1),
  porPagina: z.coerce.number().int().min(1).max(100).default(20),
});

export type EntradaCriarTransporte = z.infer<typeof esquemaCriarTransporte>;
export type EntradaAtualizarTransporte = z.infer<typeof esquemaAtualizarTransporte>;
export type EntradaAtualizarStatusTransporte = z.infer<typeof esquemaAtualizarStatusTransporte>;
