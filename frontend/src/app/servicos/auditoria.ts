import { requisitar } from "./http";
import type { LogAuditoria, RespostaPaginada } from "../tipos/api";

export const servicoAuditoria = {
  listar(token: string) {
    return requisitar<RespostaPaginada<LogAuditoria>>("/api/auditoria", { token });
  },
};
