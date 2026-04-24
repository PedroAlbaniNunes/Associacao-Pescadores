import { requisitar } from "./http";
import type { UsuarioAutenticado } from "../tipos/api";

export interface RespostaLogin {
  token: string;
  usuario: UsuarioAutenticado;
}

export const servicoAutenticacao = {
  entrar(email: string, senha: string) {
    return requisitar<RespostaLogin>("/auth/login", {
      metodo: "POST",
      corpo: { email, senha },
    });
  },

  buscarPerfil(token: string) {
    return requisitar<{ usuario: UsuarioAutenticado }>("/auth/eu", { token });
  },
};
