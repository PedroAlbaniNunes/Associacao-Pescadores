import type { FastifyInstance } from "fastify";
import { autenticar } from "../../middlewares/autenticar.js";
import { associadosServico } from "./associados.servico.js";
import {
  esquemaAlterarStatus,
  esquemaAtualizarAssociado,
  esquemaCriarAssociado,
  esquemaListarAssociados,
} from "./associados.esquemas.js";

export async function rotasAssociados(app: FastifyInstance) {
  app.addHook("preHandler", autenticar);

  app.get("/", async (requisicao) => {
    const filtros = esquemaListarAssociados.parse(requisicao.query);
    return associadosServico.listar(filtros);
  });

  app.get<{ Params: { id: string } }>("/:id", async (requisicao) => {
    return associadosServico.buscarPorId(requisicao.params.id);
  });

  app.post("/", async (requisicao, resposta) => {
    const dados = esquemaCriarAssociado.parse(requisicao.body);
    const associado = await associadosServico.criar(dados, requisicao.user.sub);
    return resposta.status(201).send(associado);
  });

  app.put<{ Params: { id: string } }>("/:id", async (requisicao) => {
    const dados = esquemaAtualizarAssociado.parse(requisicao.body);
    return associadosServico.atualizar(requisicao.params.id, dados, requisicao.user.sub);
  });

  app.patch<{ Params: { id: string } }>("/:id/status", async (requisicao) => {
    const dados = esquemaAlterarStatus.parse(requisicao.body);
    return associadosServico.alterarStatus(
      requisicao.params.id,
      dados,
      requisicao.user.sub,
    );
  });

  app.delete<{ Params: { id: string } }>("/:id", async (requisicao, resposta) => {
    await associadosServico.excluir(requisicao.params.id, requisicao.user.sub);
    return resposta.status(204).send();
  });
}
