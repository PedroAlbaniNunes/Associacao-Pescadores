import { construirAplicacao } from "./aplicacao.js";
import { ambiente } from "./configuracao/ambiente.js";

async function iniciar() {
  const app = await construirAplicacao();
  try {
    await app.listen({ port: ambiente.PORTA, host: ambiente.HOST });
    console.log(`🚀 API rodando em http://${ambiente.HOST}:${ambiente.PORTA}`);
  } catch (erro) {
    app.log.error(erro);
    process.exit(1);
  }
}

iniciar();
