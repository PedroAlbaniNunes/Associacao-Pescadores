import { z } from "zod";

export const statusReuniao = z.enum(["agendada", "em_andamento", "concluida", "cancelada"]);

export const esquemaCriarReuniao = z.object({
  titulo: z.string().min(2),
  descricao: z.string().min(5),
  data: z.string().datetime(),
  horario: z.string().min(3),
  local: z.string().min(2),
  status: statusReuniao.default("agendada"),
  pauta: z.array(z.string().min(1)).default([]),
  associadosConvocadosIds: z.array(z.string().uuid()).default([]),
  ata: z.string().optional(),
});

export const esquemaAtualizarReuniao = esquemaCriarReuniao.partial();

export const esquemaListarReunioes = z.object({
  status: statusReuniao.optional(),
  pagina: z.coerce.number().int().min(1).default(1),
  porPagina: z.coerce.number().int().min(1).max(100).default(20),
});

export const esquemaAtualizarPresenca = z.object({
  associadoId: z.string().uuid(),
  presente: z.boolean(),
});

export const esquemaAtualizarStatusReuniao = z.object({
  status: statusReuniao,
  ata: z.string().optional(),
});

export type EntradaCriarReuniao = z.infer<typeof esquemaCriarReuniao>;
export type EntradaAtualizarReuniao = z.infer<typeof esquemaAtualizarReuniao>;
export type EntradaAtualizarPresenca = z.infer<typeof esquemaAtualizarPresenca>;
export type EntradaAtualizarStatusReuniao = z.infer<typeof esquemaAtualizarStatusReuniao>;
