const URL_BASE = import.meta.env.VITE_API_URL ?? "http://localhost:3333";

export class ErroHttp extends Error {
  constructor(
    message: string,
    public status: number,
    public detalhes?: unknown,
  ) {
    super(message);
    this.name = "ErroHttp";
  }
}

type MetodoHttp = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface OpcoesRequisicao {
  metodo?: MetodoHttp;
  corpo?: unknown;
  token?: string | null;
}

export async function requisitar<T>(rota: string, opcoes: OpcoesRequisicao = {}) {
  const resposta = await fetch(`${URL_BASE}${rota}`, {
    method: opcoes.metodo ?? "GET",
    headers: {
      "Content-Type": "application/json",
      ...(opcoes.token ? { Authorization: `Bearer ${opcoes.token}` } : {}),
    },
    body: opcoes.corpo !== undefined ? JSON.stringify(opcoes.corpo) : undefined,
  });

  if (resposta.status === 204) {
    return undefined as T;
  }

  const dados = await resposta.json().catch(() => null);

  if (!resposta.ok) {
    throw new ErroHttp(
      dados?.mensagem ?? "Falha na comunicação com a API",
      resposta.status,
      dados,
    );
  }

  return dados as T;
}
