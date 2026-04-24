import type { FastifyInstance } from "fastify";
import { autenticar } from "../../middlewares/autenticar.js";
import { prisma } from "../../infraestrutura/prisma/cliente.js";
import { z } from "zod";

const esquemaListarAuditoria = z.object({
  entidade: z.string().optional(),
  pagina: z.coerce.number().int().min(1).default(1),
  porPagina: z.coerce.number().int().min(1).max(100).default(20),
});

export async function rotasAuditoria(app: FastifyInstance) {
  app.addHook("preHandler", autenticar);

  app.get("/", async (requisicao) => {
    const filtros = esquemaListarAuditoria.parse(requisicao.query);

    const where = filtros.entidade ? { entidade: filtros.entidade } : undefined;
    const [itens, total] = await Promise.all([
      prisma.logAuditoria.findMany({
        where,
        include: {
          usuario: { select: { id: true, nome: true, email: true } },
        },
        skip: (filtros.pagina - 1) * filtros.porPagina,
        take: filtros.porPagina,
        orderBy: { criadoEm: "desc" },
      }),
      prisma.logAuditoria.count({ where }),
    ]);

    return {
      itens,
      total,
      pagina: filtros.pagina,
      porPagina: filtros.porPagina,
      totalPaginas: Math.ceil(total / filtros.porPagina),
    };
  });
}
