import { requisitar } from "./http";
import type { Permissao, RespostaPaginada } from "../tipos/api";

interface FiltrosPermissoes {
  busca?: string;
}

export const servicoPermissoes = {
  listar(token: string, filtros: FiltrosPermissoes = {}) {
    const params = new URLSearchParams();
    if (filtros.busca) params.set("busca", filtros.busca);
    return requisitar<RespostaPaginada<Permissao>>(`/api/permissoes?${params.toString()}`, { token });
  },

  criar(token: string, dados: Partial<Permissao>) {
    return requisitar<Permissao>("/api/permissoes", {
      metodo: "POST",
      token,
      corpo: dados,
    });
  },

  atualizar(token: string, id: string, dados: Partial<Permissao>) {
    return requisitar<Permissao>(`/api/permissoes/${id}`, {
      metodo: "PUT",
      token,
      corpo: dados,
    });
  },

  alternar(token: string, id: string, ativa: boolean) {
    return requisitar<Permissao>(`/api/permissoes/${id}/ativa`, {
      metodo: "PATCH",
      token,
      corpo: { ativa },
    });
  },

  excluir(token: string, id: string) {
    return requisitar<void>(`/api/permissoes/${id}`, {
      metodo: "DELETE",
      token,
    });
  },
};
