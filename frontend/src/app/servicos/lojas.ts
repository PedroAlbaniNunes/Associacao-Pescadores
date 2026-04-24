import { requisitar } from "./http";
import type { Loja, RespostaPaginada, StatusLoja } from "../tipos/api";

interface FiltrosLojas {
  busca?: string;
  status?: StatusLoja;
}

export const servicoLojas = {
  listar(token: string, filtros: FiltrosLojas = {}) {
    const params = new URLSearchParams();
    if (filtros.busca) params.set("busca", filtros.busca);
    if (filtros.status) params.set("status", filtros.status);
    return requisitar<RespostaPaginada<Loja>>(`/api/lojas?${params.toString()}`, { token });
  },

  criar(token: string, dados: Partial<Loja>) {
    return requisitar<Loja>("/api/lojas", {
      metodo: "POST",
      token,
      corpo: dados,
    });
  },

  atualizar(token: string, id: string, dados: Partial<Loja>) {
    return requisitar<Loja>(`/api/lojas/${id}`, {
      metodo: "PUT",
      token,
      corpo: dados,
    });
  },

  atualizarStatus(token: string, id: string, status: StatusLoja, motivoRejeicao?: string) {
    return requisitar<Loja>(`/api/lojas/${id}/status`, {
      metodo: "PATCH",
      token,
      corpo: { status, motivoRejeicao },
    });
  },

  excluir(token: string, id: string) {
    return requisitar<void>(`/api/lojas/${id}`, {
      metodo: "DELETE",
      token,
    });
  },
};
