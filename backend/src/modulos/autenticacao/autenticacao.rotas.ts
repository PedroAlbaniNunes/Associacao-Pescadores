import type { FastifyInstance } from "fastify";
import { esquemaLogin } from "./autenticacao.esquemas.js";
import { autenticacaoServico } from "./autenticacao.servico.js";
import { autenticar } from "../../middlewares/autenticar.js";

export async function rotasAutenticacao(app: FastifyInstance) {
  app.post("/login", async (requisicao) => {
    const dados = esquemaLogin.parse(requisicao.body);
    const usuario = await autenticacaoServico.autenticar(dados);
    const token = await app.jwt.sign({
      sub: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      papel: usuario.papel,
    });
    return { token, usuario };
  });

  app.get("/eu", { preHandler: autenticar }, async (requisicao) => {
    const perfil = await autenticacaoServico.buscarPerfil(requisicao.user.sub);
    return { usuario: perfil };
  });
}
