import { requisitar } from "./http";
import type { RespostaPaginada, Reuniao, StatusReuniao } from "../tipos/api";

export const servicoReunioes = {
  listar(token: string, status?: StatusReuniao) {
    const params = new URLSearchParams();
    if (status) params.set("status", status);
    return requisitar<RespostaPaginada<Reuniao>>(`/api/reunioes?${params.toString()}`, { token });
  },

  criar(token: string, dados: {
    titulo: string;
    descricao: string;
    data: string;
    horario: string;
    local: string;
    status?: StatusReuniao;
    pauta: string[];
    associadosConvocadosIds: string[];
    ata?: string;
  }) {
    return requisitar<Reuniao>("/api/reunioes", {
      metodo: "POST",
      token,
      corpo: dados,
    });
  },

  atualizarStatus(token: string, id: string, status: StatusReuniao, ata?: string) {
    return requisitar<Reuniao>(`/api/reunioes/${id}/status`, {
      metodo: "PATCH",
      token,
      corpo: { status, ata },
    });
  },

  atualizarPresenca(token: string, id: string, associadoId: string, presente: boolean) {
    return requisitar(`/api/reunioes/${id}/presenca`, {
      metodo: "PATCH",
      token,
      corpo: { associadoId, presente },
    });
  },

  excluir(token: string, id: string) {
    return requisitar<void>(`/api/reunioes/${id}`, {
      metodo: "DELETE",
      token,
    });
  },
};
