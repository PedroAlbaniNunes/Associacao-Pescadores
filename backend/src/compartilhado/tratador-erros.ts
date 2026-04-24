import type { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";
import { ErroAplicacao } from "./erros.js";

export function tratadorDeErros(
  erro: FastifyError,
  _requisicao: FastifyRequest,
  resposta: FastifyReply,
) {
  if (erro instanceof ZodError) {
    return resposta.status(400).send({
      mensagem: "Dados de entrada inválidos",
      erros: erro.flatten().fieldErrors,
    });
  }

  if (erro instanceof ErroAplicacao) {
    return resposta.status(erro.statusCode).send({ mensagem: erro.mensagem });
  }

  if (erro.statusCode && erro.statusCode < 500) {
    return resposta.status(erro.statusCode).send({ mensagem: erro.message });
  }

  console.error("[ERRO INTERNO]", erro);
  return resposta.status(500).send({ mensagem: "Erro interno do servidor" });
}
