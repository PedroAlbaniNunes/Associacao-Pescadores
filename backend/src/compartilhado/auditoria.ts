import { prisma } from "../infraestrutura/prisma/cliente.js";

export async function registrarAuditoria(args: {
  usuarioId?: string;
  acao: string;
  entidade: string;
  entidadeId?: string;
  detalhes?: Record<string, unknown> | string;
}) {
  try {
    await prisma.logAuditoria.create({
      data: {
        usuarioId: args.usuarioId,
        acao: args.acao,
        entidade: args.entidade,
        entidadeId: args.entidadeId,
        detalhes:
          typeof args.detalhes === "string"
            ? args.detalhes
            : args.detalhes
              ? JSON.stringify(args.detalhes)
              : null,
      },
    });
  } catch (erro) {
    console.error("[AUDITORIA] Falha ao registrar log:", erro);
  }
}
