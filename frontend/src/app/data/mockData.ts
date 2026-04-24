export type StatusAssociado = "ativo" | "suspenso" | "inadimplente";
export type StatusLoja = "pendente" | "aprovada" | "rejeitada";
export type StatusReuniao = "agendada" | "em_andamento" | "concluida" | "cancelada";

export interface Associado {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  status: StatusAssociado;
  dataCadastro: string;
  foto?: string;
  embarcacao?: string;
  numeroCarteira: string;
}

export interface Loja {
  id: string;
  associadoId: string;
  associadoNome: string;
  nomeLoja: string;
  descricao: string;
  status: StatusLoja;
  dataSolicitacao: string;
  foto?: string;
  produtos: number;
}

export interface Permissao {
  id: string;
  associadoId: string;
  associadoNome: string;
  tipoPermissao: string;
  ativa: boolean;
  dataInicio: string;
  dataFim?: string;
  quota?: number;
}

export interface Reuniao {
  id: string;
  titulo: string;
  descricao: string;
  data: string;
  horario: string;
  local: string;
  status: StatusReuniao;
  pauta: string[];
  presencas: {
    associadoId: string;
    associadoNome: string;
    presente: boolean;
  }[];
  ata?: string;
}

export const mockAssociados: Associado[] = [
  {
    id: "1",
    nome: "João da Silva",
    cpf: "123.456.789-00",
    email: "joao@email.com",
    telefone: "(11) 98765-4321",
    status: "ativo",
    dataCadastro: "2023-01-15",
    embarcacao: "Maré Alta I",
    numeroCarteira: "AP-001234",
  },
  {
    id: "2",
    nome: "Maria Santos",
    cpf: "234.567.890-11",
    email: "maria@email.com",
    telefone: "(11) 98765-4322",
    status: "ativo",
    dataCadastro: "2023-02-20",
    embarcacao: "Pescador II",
    numeroCarteira: "AP-001235",
  },
  {
    id: "3",
    nome: "Pedro Costa",
    cpf: "345.678.901-22",
    email: "pedro@email.com",
    telefone: "(11) 98765-4323",
    status: "inadimplente",
    dataCadastro: "2023-03-10",
    embarcacao: "Onda Azul",
    numeroCarteira: "AP-001236",
  },
  {
    id: "4",
    nome: "Ana Oliveira",
    cpf: "456.789.012-33",
    email: "ana@email.com",
    telefone: "(11) 98765-4324",
    status: "suspenso",
    dataCadastro: "2023-04-05",
    embarcacao: "Correnteza",
    numeroCarteira: "AP-001237",
  },
  {
    id: "5",
    nome: "Carlos Ferreira",
    cpf: "567.890.123-44",
    email: "carlos@email.com",
    telefone: "(11) 98765-4325",
    status: "ativo",
    dataCadastro: "2023-05-18",
    embarcacao: "Horizonte",
    numeroCarteira: "AP-001238",
  },
];

export const mockLojas: Loja[] = [
  {
    id: "1",
    associadoId: "1",
    associadoNome: "João da Silva",
    nomeLoja: "Peixes Frescos João",
    descricao: "Pescados frescos direto do mar",
    status: "aprovada",
    dataSolicitacao: "2023-06-01",
    produtos: 12,
  },
  {
    id: "2",
    associadoId: "2",
    associadoNome: "Maria Santos",
    nomeLoja: "Empório do Mar",
    descricao: "Variedade de peixes e frutos do mar",
    status: "pendente",
    dataSolicitacao: "2024-04-03",
    produtos: 8,
  },
  {
    id: "3",
    associadoId: "5",
    associadoNome: "Carlos Ferreira",
    nomeLoja: "Pescados Horizonte",
    descricao: "Qualidade e frescor garantidos",
    status: "pendente",
    dataSolicitacao: "2024-04-05",
    produtos: 15,
  },
  {
    id: "4",
    associadoId: "1",
    associadoNome: "João da Silva",
    nomeLoja: "Fish Express",
    descricao: "Entrega rápida de pescados",
    status: "aprovada",
    dataSolicitacao: "2023-08-12",
    produtos: 10,
  },
];

export const mockPermissoes: Permissao[] = [
  {
    id: "1",
    associadoId: "1",
    associadoNome: "João da Silva",
    tipoPermissao: "Pesca de Arrasto",
    ativa: true,
    dataInicio: "2024-01-01",
    dataFim: "2024-12-31",
    quota: 500,
  },
  {
    id: "2",
    associadoId: "2",
    associadoNome: "Maria Santos",
    tipoPermissao: "Pesca Artesanal",
    ativa: true,
    dataInicio: "2024-01-01",
    dataFim: "2024-12-31",
    quota: 300,
  },
  {
    id: "3",
    associadoId: "3",
    associadoNome: "Pedro Costa",
    tipoPermissao: "Venda no Marketplace",
    ativa: false,
    dataInicio: "2023-06-01",
    dataFim: "2024-03-01",
  },
  {
    id: "4",
    associadoId: "5",
    associadoNome: "Carlos Ferreira",
    tipoPermissao: "Pesca Costeira",
    ativa: true,
    dataInicio: "2024-02-01",
    dataFim: "2025-02-01",
    quota: 400,
  },
  {
    id: "5",
    associadoId: "1",
    associadoNome: "João da Silva",
    tipoPermissao: "Venda no Marketplace",
    ativa: true,
    dataInicio: "2023-06-15",
  },
];

export const mockReunioes: Reuniao[] = [
  {
    id: "1",
    titulo: "Assembleia Geral Ordinária",
    descricao: "Discussão sobre novas regulamentações e aprovação de contas",
    data: "2024-04-15",
    horario: "14:00",
    local: "Sede da Associação - Sala Principal",
    status: "agendada",
    pauta: [
      "Aprovação das contas do trimestre",
      "Discussão sobre novas quotas de pesca",
      "Eleição de novos membros da diretoria",
      "Melhorias na infraestrutura do porto"
    ],
    presencas: [
      { associadoId: "1", associadoNome: "João da Silva", presente: false },
      { associadoId: "2", associadoNome: "Maria Santos", presente: false },
      { associadoId: "3", associadoNome: "Pedro Costa", presente: false },
      { associadoId: "4", associadoNome: "Ana Oliveira", presente: false },
      { associadoId: "5", associadoNome: "Carlos Ferreira", presente: false },
    ],
  },
  {
    id: "2",
    titulo: "Reunião sobre Sustentabilidade",
    descricao: "Práticas de pesca sustentável e preservação ambiental",
    data: "2024-04-10",
    horario: "16:00",
    local: "Auditório Maré Alta",
    status: "concluida",
    pauta: [
      "Apresentação de práticas sustentáveis",
      "Discussão sobre áreas de preservação",
      "Parceria com ONGs ambientais"
    ],
    presencas: [
      { associadoId: "1", associadoNome: "João da Silva", presente: true },
      { associadoId: "2", associadoNome: "Maria Santos", presente: true },
      { associadoId: "3", associadoNome: "Pedro Costa", presente: false },
      { associadoId: "5", associadoNome: "Carlos Ferreira", presente: true },
    ],
    ata: "Reunião realizada com sucesso. Foram aprovadas novas diretrizes de pesca sustentável e estabelecida parceria com a ONG Mar Limpo."
  },
  {
    id: "3",
    titulo: "Capacitação - Marketplace Digital",
    descricao: "Treinamento para venda online e uso do aplicativo",
    data: "2024-04-20",
    horario: "09:00",
    local: "Centro de Treinamento",
    status: "agendada",
    pauta: [
      "Como usar o aplicativo marketplace",
      "Gestão de vendas online",
      "Fotografia de produtos",
      "Atendimento ao cliente digital"
    ],
    presencas: [
      { associadoId: "1", associadoNome: "João da Silva", presente: false },
      { associadoId: "2", associadoNome: "Maria Santos", presente: false },
      { associadoId: "5", associadoNome: "Carlos Ferreira", presente: false },
    ],
  },
  {
    id: "4",
    titulo: "Reunião Emergencial - Defeso",
    descricao: "Discussão sobre período de defeso e compensações",
    data: "2024-03-25",
    horario: "10:00",
    local: "Sede da Associação",
    status: "concluida",
    pauta: [
      "Informações sobre período de defeso",
      "Auxílio emergencial para associados",
      "Atividades alternativas durante defeso"
    ],
    presencas: [
      { associadoId: "1", associadoNome: "João da Silva", presente: true },
      { associadoId: "2", associadoNome: "Maria Santos", presente: true },
      { associadoId: "3", associadoNome: "Pedro Costa", presente: true },
      { associadoId: "4", associadoNome: "Ana Oliveira", presente: false },
      { associadoId: "5", associadoNome: "Carlos Ferreira", presente: true },
    ],
    ata: "Definidas estratégias de suporte durante o período de defeso. Aprovado auxílio emergencial para todos os associados ativos."
  },
];
