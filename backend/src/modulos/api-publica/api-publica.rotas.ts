import type { FastifyInstance } from "fastify";
import { prisma } from "../../infraestrutura/prisma/cliente.js";
import { ErroNaoEncontrado } from "../../compartilhado/erros.js";
import { mensalidadesServico } from "../mensalidades/mensalidades.servico.js";

export async function rotasApiPublica(app: FastifyInstance) {
  app.get("/associados/ativos", async () => {
    await mensalidadesServico.sincronizarAtrasos();
    const associados = await prisma.associado.findMany({
      where: { status: "ativo" },
      select: {
        id: true,
        nome: true,
        status: true,
      },
      orderBy: { nome: "asc" },
    });
    return { itens: associados };
  });

  app.get("/lojas/aprovadas", async () => {
    await mensalidadesServico.sincronizarAtrasos();
    const lojas = await prisma.loja.findMany({
      where: {
        status: "aprovada",
        associado: { status: "ativo" },
      },
      include: {
        associado: {
          select: { id: true, nome: true },
        },
      },
      orderBy: { nomeLoja: "asc" },
    });
    return { itens: lojas };
  });

  app.get<{ Params: { id: string } }>("/pescador/:id/pode-vender", async (requisicao) => {
    await mensalidadesServico.sincronizarAtrasos();
    const associado = await prisma.associado.findUnique({ where: { id: requisicao.params.id } });
    if (!associado) throw new ErroNaoEncontrado("Associado");

    const lojasAprovadas = await prisma.loja.count({
      where: { associadoId: associado.id, status: "aprovada" },
    });

    return {
      associadoId: associado.id,
      podeVender: associado.status === "ativo" && lojasAprovadas > 0,
      status: associado.status,
      lojasAprovadas,
    };
  });

  app.get<{ Params: { id: string } }>("/pescador/:id/status", async (requisicao) => {
    await mensalidadesServico.sincronizarAtrasos();
    const associado = await prisma.associado.findUnique({
      where: { id: requisicao.params.id },
      select: { id: true, nome: true, status: true },
    });
    if (!associado) throw new ErroNaoEncontrado("Associado");
    return associado;
  });

  app.get<{ Params: { id: string } }>("/pescador/:id/ativo", async (requisicao) => {
    await mensalidadesServico.sincronizarAtrasos();
    const associado = await prisma.associado.findUnique({
      where: { id: requisicao.params.id },
      select: { status: true },
    });
    if (!associado) throw new ErroNaoEncontrado("Associado");
    return associado.status === "ativo";
  });

  app.get<{ Params: { id: string } }>("/loja/:id/ativa", async (requisicao) => {
    await mensalidadesServico.sincronizarAtrasos();
    const loja = await prisma.loja.findUnique({
      where: { id: requisicao.params.id },
      select: { status: true, associado: { select: { status: true } } },
    });
    if (!loja) throw new ErroNaoEncontrado("Loja");
    return loja.status === "aprovada" && loja.associado.status === "ativo";
  });
}
