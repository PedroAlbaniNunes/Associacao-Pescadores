import type { FastifyInstance } from "fastify";
import { autenticar } from "../../middlewares/autenticar.js";
import { lojasServico } from "./lojas.servico.js";
import {
  esquemaAtualizarLoja,
  esquemaAtualizarStatusLoja,
  esquemaCriarLoja,
  esquemaListarLojas,
} from "./lojas.esquemas.js";

export async function rotasLojas(app: FastifyInstance) {
  app.addHook("preHandler", autenticar);

  app.get("/", async (requisicao) => {
    const filtros = esquemaListarLojas.parse(requisicao.query);
    return lojasServico.listar(filtros);
  });

  app.get<{ Params: { id: string } }>("/:id", async (requisicao) => {
    return lojasServico.buscarPorId(requisicao.params.id);
  });

  app.post("/", async (requisicao, resposta) => {
    const dados = esquemaCriarLoja.parse(requisicao.body);
    const loja = await lojasServico.criar(dados, requisicao.user.sub);
    return resposta.status(201).send(loja);
  });

  app.put<{ Params: { id: string } }>("/:id", async (requisicao) => {
    const dados = esquemaAtualizarLoja.parse(requisicao.body);
    return lojasServico.atualizar(requisicao.params.id, dados, requisicao.user.sub);
  });

  app.patch<{ Params: { id: string } }>("/:id/status", async (requisicao) => {
    const dados = esquemaAtualizarStatusLoja.parse(requisicao.body);
    return lojasServico.atualizarStatus(requisicao.params.id, dados, requisicao.user.sub);
  });

  app.delete<{ Params: { id: string } }>("/:id", async (requisicao, resposta) => {
    await lojasServico.excluir(requisicao.params.id, requisicao.user.sub);
    return resposta.status(204).send();
  });
}
