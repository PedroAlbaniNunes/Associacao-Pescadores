import type { FastifyInstance } from "fastify";
import { autenticar } from "../../middlewares/autenticar.js";
import { permissoesServico } from "./permissoes.servico.js";
import {
  esquemaAlternarPermissao,
  esquemaAtualizarPermissao,
  esquemaCriarPermissao,
  esquemaListarPermissoes,
} from "./permissoes.esquemas.js";

export async function rotasPermissoes(app: FastifyInstance) {
  app.addHook("preHandler", autenticar);

  app.get("/", async (requisicao) => {
    const filtros = esquemaListarPermissoes.parse(requisicao.query);
    return permissoesServico.listar(filtros);
  });

  app.get<{ Params: { id: string } }>("/:id", async (requisicao) => {
    return permissoesServico.buscarPorId(requisicao.params.id);
  });

  app.post("/", async (requisicao, resposta) => {
    const dados = esquemaCriarPermissao.parse(requisicao.body);
    const permissao = await permissoesServico.criar(dados, requisicao.user.sub);
    return resposta.status(201).send(permissao);
  });

  app.put<{ Params: { id: string } }>("/:id", async (requisicao) => {
    const dados = esquemaAtualizarPermissao.parse(requisicao.body);
    return permissoesServico.atualizar(requisicao.params.id, dados, requisicao.user.sub);
  });

  app.patch<{ Params: { id: string } }>("/:id/ativa", async (requisicao) => {
    const dados = esquemaAlternarPermissao.parse(requisicao.body);
    return permissoesServico.alternar(requisicao.params.id, dados, requisicao.user.sub);
  });

  app.delete<{ Params: { id: string } }>("/:id", async (requisicao, resposta) => {
    await permissoesServico.excluir(requisicao.params.id, requisicao.user.sub);
    return resposta.status(204).send();
  });
}
