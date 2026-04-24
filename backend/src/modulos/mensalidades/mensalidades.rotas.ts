import type { FastifyInstance } from "fastify";
import { autenticar } from "../../middlewares/autenticar.js";
import { mensalidadesServico } from "./mensalidades.servico.js";
import {
  esquemaAtualizarMensalidade,
  esquemaCriarMensalidade,
  esquemaListarMensalidades,
  esquemaRegistrarPagamento,
} from "./mensalidades.esquemas.js";

export async function rotasMensalidades(app: FastifyInstance) {
  app.addHook("preHandler", autenticar);

  app.get("/", async (requisicao) => {
    const filtros = esquemaListarMensalidades.parse(requisicao.query);
    return mensalidadesServico.listar(filtros);
  });

  app.get<{ Params: { id: string } }>("/:id", async (requisicao) => {
    return mensalidadesServico.buscarPorId(requisicao.params.id);
  });

  app.post("/", async (requisicao, resposta) => {
    const dados = esquemaCriarMensalidade.parse(requisicao.body);
    const mensalidade = await mensalidadesServico.criar(dados, requisicao.user.sub);
    return resposta.status(201).send(mensalidade);
  });

  app.put<{ Params: { id: string } }>("/:id", async (requisicao) => {
    const dados = esquemaAtualizarMensalidade.parse(requisicao.body);
    return mensalidadesServico.atualizar(requisicao.params.id, dados, requisicao.user.sub);
  });

  app.patch<{ Params: { id: string } }>("/:id/pagamento", async (requisicao) => {
    const dados = esquemaRegistrarPagamento.parse(requisicao.body);
    return mensalidadesServico.registrarPagamento(requisicao.params.id, dados, requisicao.user.sub);
  });

  app.delete<{ Params: { id: string } }>("/:id", async (requisicao, resposta) => {
    await mensalidadesServico.excluir(requisicao.params.id, requisicao.user.sub);
    return resposta.status(204).send();
  });
}
