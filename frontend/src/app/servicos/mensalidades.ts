import { requisitar } from "./http";
import type { Mensalidade, RespostaPaginada, StatusMensalidade } from "../tipos/api";

interface FiltrosMensalidades {
  status?: StatusMensalidade;
}

export const servicoMensalidades = {
  listar(token: string, filtros: FiltrosMensalidades = {}) {
    const params = new URLSearchParams();
    if (filtros.status) params.set("status", filtros.status);
    return requisitar<RespostaPaginada<Mensalidade>>(`/api/mensalidades?${params.toString()}`, { token });
  },

  criar(token: string, dados: {
    associadoId: string;
    competencia: string;
    valor: number;
    dataVencimento: string;
  }) {
    return requisitar<Mensalidade>("/api/mensalidades", {
      metodo: "POST",
      token,
      corpo: dados,
    });
  },

  registrarPagamento(token: string, id: string) {
    return requisitar<Mensalidade>(`/api/mensalidades/${id}/pagamento`, {
      metodo: "PATCH",
      token,
      corpo: {},
    });
  },
};
