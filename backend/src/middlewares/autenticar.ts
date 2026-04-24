import type { FastifyReply, FastifyRequest } from "fastify";
import { ErroNaoAutorizado } from "../compartilhado/erros.js";

export async function autenticar(requisicao: FastifyRequest, _resposta: FastifyReply) {
  try {
    await requisicao.jwtVerify();
  } catch {
    throw new ErroNaoAutorizado("Token ausente ou inválido");
  }
}
