import { requisitar } from "./http";
import type { DashboardResumo } from "../tipos/api";

export const servicoDashboard = {
  buscar(token: string) {
    return requisitar<DashboardResumo>("/api/dashboard", { token });
  },
};
