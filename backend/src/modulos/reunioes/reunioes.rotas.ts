import type { FastifyInstance } from "fastify";
import { autenticar } from "../../middlewares/autenticar.js";
import { reunioesServico } from "./reunioes.servico.js";
import {
  esquemaAtualizarPresenca,
  esquemaAtualizarReuniao,
  esquemaAtualizarStatusReuniao,
  esquemaCriarReuniao,
  esquemaListarReunioes,
} from "./reunioes.esquemas.js";

export async function rotasReunioes(app: FastifyInstance) {
  app.addHook("preHandler", autenticar);

  app.get("/", async (requisicao) => {
    const filtros = esquemaListarReunioes.parse(requisicao.query);
    return reunioesServico.listar(filtros);
  });

  app.get<{ Params: { id: string } }>("/:id", async (requisicao) => {
    return reunioesServico.buscarPorId(requisicao.params.id);
  });

  app.post("/", async (requisicao, resposta) => {
    const dados = esquemaCriarReuniao.parse(requisicao.body);
    const reuniao = await reunioesServico.criar(dados, requisicao.user.sub);
    return resposta.status(201).send(reuniao);
  });

  app.put<{ Params: { id: string } }>("/:id", async (requisicao) => {
    const dados = esquemaAtualizarReuniao.parse(requisicao.body);
    return reunioesServico.atualizar(requisicao.params.id, dados, requisicao.user.sub);
  });

  app.patch<{ Params: { id: string } }>("/:id/status", async (requisicao) => {
    const dados = esquemaAtualizarStatusReuniao.parse(requisicao.body);
    return reunioesServico.atualizarStatus(requisicao.params.id, dados, requisicao.user.sub);
  });

  app.patch<{ Params: { id: string } }>("/:id/presenca", async (requisicao) => {
    const dados = esquemaAtualizarPresenca.parse(requisicao.body);
    return reunioesServico.atualizarPresenca(requisicao.params.id, dados, requisicao.user.sub);
  });

  app.delete<{ Params: { id: string } }>("/:id", async (requisicao, resposta) => {
    await reunioesServico.excluir(requisicao.params.id, requisicao.user.sub);
    return resposta.status(204).send();
  });
}
