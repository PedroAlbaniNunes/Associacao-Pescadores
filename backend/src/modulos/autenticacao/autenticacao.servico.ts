import bcrypt from "bcryptjs";
import { prisma } from "../../infraestrutura/prisma/cliente.js";
import { ErroNaoAutorizado } from "../../compartilhado/erros.js";
import type { EntradaLogin } from "./autenticacao.esquemas.js";

export const autenticacaoServico = {
  async autenticar(dados: EntradaLogin) {
    const usuario = await prisma.usuario.findUnique({ where: { email: dados.email } });
    if (!usuario) throw new ErroNaoAutorizado("Credenciais inválidas");

    const senhaValida = await bcrypt.compare(dados.senha, usuario.senhaHash);
    if (!senhaValida) throw new ErroNaoAutorizado("Credenciais inválidas");

    return {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      papel: usuario.papel,
    };
  },

  async buscarPerfil(id: string) {
    const usuario = await prisma.usuario.findUnique({
      where: { id },
      select: { id: true, nome: true, email: true, papel: true, criadoEm: true },
    });
    if (!usuario) throw new ErroNaoAutorizado("Sessão inválida");
    return usuario;
  },
};
