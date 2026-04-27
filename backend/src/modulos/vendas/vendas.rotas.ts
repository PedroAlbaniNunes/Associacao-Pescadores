import type { FastifyInstance } from "fastify";
import { autenticar } from "../../middlewares/autenticar.js";
import { vendasServico } from "./vendas.servico.js";
import {
  esquemaAtualizarStatusVenda,
  esquemaCriarVenda,
  esquemaListarVendas,
} from "./vendas.esquemas.js";

export async function rotasVendas(app: FastifyInstance) {
  app.addHook("preHandler", autenticar);

  app.get("/", async (requisicao) => {
    const filtros = esquemaListarVendas.parse(requisicao.query);
    return vendasServico.listar(filtros);
  });

  app.get<{ Params: { id: string } }>("/:id", async (requisicao) => {
    return vendasServico.buscarPorId(requisicao.params.id);
  });

  app.post("/", async (requisicao, resposta) => {
    const dados = esquemaCriarVenda.parse(requisicao.body);
    const venda = await vendasServico.criar(dados, requisicao.user.sub);
    return resposta.status(201).send(venda);
  });

  app.patch<{ Params: { id: string } }>("/:id/status", async (requisicao) => {
    const dados = esquemaAtualizarStatusVenda.parse(requisicao.body);
    return vendasServico.atualizarStatus(requisicao.params.id, dados, requisicao.user.sub);
  });

  app.delete<{ Params: { id: string } }>("/:id", async (requisicao, resposta) => {
    await vendasServico.excluir(requisicao.params.id, requisicao.user.sub);
    return resposta.status(204).send();
  });
}
