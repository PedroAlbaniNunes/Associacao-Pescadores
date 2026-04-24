import { createContext, useEffect, useMemo, useState } from "react";
import type { PropsWithChildren } from "react";
import type { UsuarioAutenticado } from "../tipos/api";
import { servicoAutenticacao } from "../servicos/autenticacao";

interface EstadoAutenticacao {
  token: string | null;
  usuario: UsuarioAutenticado | null;
  carregando: boolean;
  autenticado: boolean;
  entrar: (email: string, senha: string) => Promise<void>;
  sair: () => void;
}

const CHAVE_TOKEN = "associacao-pescadores.token";

export const AuthContext = createContext<EstadoAutenticacao | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem(CHAVE_TOKEN));
  const [usuario, setUsuario] = useState<UsuarioAutenticado | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function inicializar() {
      if (!token) {
        setCarregando(false);
        return;
      }

      try {
        const resposta = await servicoAutenticacao.buscarPerfil(token);
        setUsuario(resposta.usuario);
      } catch {
        localStorage.removeItem(CHAVE_TOKEN);
        setToken(null);
        setUsuario(null);
      } finally {
        setCarregando(false);
      }
    }

    void inicializar();
  }, [token]);

  const valor = useMemo<EstadoAutenticacao>(
    () => ({
      token,
      usuario,
      carregando,
      autenticado: Boolean(token && usuario),
      async entrar(email: string, senha: string) {
        const resposta = await servicoAutenticacao.entrar(email, senha);
        localStorage.setItem(CHAVE_TOKEN, resposta.token);
        setToken(resposta.token);
        setUsuario(resposta.usuario);
      },
      sair() {
        localStorage.removeItem(CHAVE_TOKEN);
        setToken(null);
        setUsuario(null);
      },
    }),
    [carregando, token, usuario],
  );

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>;
}
