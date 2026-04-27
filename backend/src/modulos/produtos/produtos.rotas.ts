import type { FastifyInstance } from "fastify";
import { autenticar } from "../../middlewares/autenticar.js";
import { produtosServico } from "./produtos.servico.js";
import {
  esquemaAtualizarProduto,
  esquemaCriarProduto,
  esquemaListarProdutos,
} from "./produtos.esquemas.js";

export async function rotasProdutos(app: FastifyInstance) {
  app.addHook("preHandler", autenticar);

  app.get("/", async (requisicao) => {
    const filtros = esquemaListarProdutos.parse(requisicao.query);
    return produtosServico.listar(filtros);
  });

  app.get<{ Params: { id: string } }>("/:id", async (requisicao) => {
    return produtosServico.buscarPorId(requisicao.params.id);
  });

  app.post("/", async (requisicao, resposta) => {
    const dados = esquemaCriarProduto.parse(requisicao.body);
    const produto = await produtosServico.criar(dados, requisicao.user.sub);
    return resposta.status(201).send(produto);
  });

  app.put<{ Params: { id: string } }>("/:id", async (requisicao) => {
    const dados = esquemaAtualizarProduto.parse(requisicao.body);
    return produtosServico.atualizar(requisicao.params.id, dados, requisicao.user.sub);
  });

  app.delete<{ Params: { id: string } }>("/:id", async (requisicao, resposta) => {
    await produtosServico.excluir(requisicao.params.id, requisicao.user.sub);
    return resposta.status(204).send();
  });
}
