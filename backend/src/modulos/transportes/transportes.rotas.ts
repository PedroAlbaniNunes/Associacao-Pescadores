import type { FastifyInstance } from "fastify";
import { autenticar } from "../../middlewares/autenticar.js";
import { transportesServico } from "./transportes.servico.js";
import {
  esquemaAtualizarStatusTransporte,
  esquemaAtualizarTransporte,
  esquemaCriarTransporte,
  esquemaListarTransportes,
} from "./transportes.esquemas.js";

export async function rotasTransportes(app: FastifyInstance) {
  app.addHook("preHandler", autenticar);

  app.get("/", async (requisicao) => {
    const filtros = esquemaListarTransportes.parse(requisicao.query);
    return transportesServico.listar(filtros);
  });

  app.get<{ Params: { id: string } }>("/:id", async (requisicao) => {
    return transportesServico.buscarPorId(requisicao.params.id);
  });

  app.post("/", async (requisicao, resposta) => {
    const dados = esquemaCriarTransporte.parse(requisicao.body);
    const transporte = await transportesServico.criar(dados, requisicao.user.sub);
    return resposta.status(201).send(transporte);
  });

  app.put<{ Params: { id: string } }>("/:id", async (requisicao) => {
    const dados = esquemaAtualizarTransporte.parse(requisicao.body);
    return transportesServico.atualizar(requisicao.params.id, dados, requisicao.user.sub);
  });

  app.patch<{ Params: { id: string } }>("/:id/status", async (requisicao) => {
    const dados = esquemaAtualizarStatusTransporte.parse(requisicao.body);
    return transportesServico.atualizarStatus(
      requisicao.params.id,
      dados,
      requisicao.user.sub
    );
  });

  app.delete<{ Params: { id: string } }>("/:id", async (requisicao, resposta) => {
    await transportesServico.excluir(requisicao.params.id, requisicao.user.sub);
    return resposta.status(204).send();
  });
}
