export function formatarData(data?: string | null, opcoes?: Intl.DateTimeFormatOptions) {
  if (!data) return "—";
  return new Date(data).toLocaleDateString("pt-BR", opcoes);
}

export function formatarDataHora(data?: string | null) {
  if (!data) return "—";
  return new Date(data).toLocaleString("pt-BR");
}

export function formatarMoeda(valor?: number | null) {
  if (valor === undefined || valor === null) return "—";
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function paraValorInputDateTime(data?: string | null) {
  if (!data) return "";
  return new Date(data).toISOString().slice(0, 16);
}
