import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Search, Filter, UserPlus, Eye, Edit, Trash2, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Textarea } from "../components/ui/textarea";
import { useAutenticacao } from "../hooks/useAutenticacao";
import { servicoAssociados } from "../servicos/associados";
import type {
  Associado,
  HistoricoStatusAssociado,
  Mensalidade,
  Permissao,
  Loja,
  StatusAssociado,
} from "../tipos/api";
import { formatarData, formatarMoeda } from "../utils/formatacao";

type DetalhesAssociado = Associado & {
  historicoStatus: HistoricoStatusAssociado[];
  lojas: Loja[];
  permissoes: Permissao[];
  mensalidades: Mensalidade[];
};

const statusClasse: Record<StatusAssociado, string> = {
  ativo: "bg-green-100 text-green-800 hover:bg-green-100",
  suspenso: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
  inadimplente: "bg-red-100 text-red-800 hover:bg-red-100",
  bloqueado: "bg-slate-200 text-slate-800 hover:bg-slate-200",
};

const formularioInicial = {
  nome: "",
  cpf: "",
  email: "",
  telefone: "",
  embarcacao: "",
  numeroCarteira: "",
  status: "ativo" as StatusAssociado,
  observacoes: "",
};

export function Associados() {
  const { token } = useAutenticacao();
  const [associados, setAssociados] = useState<Associado[]>([]);
  const [filtroStatus, setFiltroStatus] = useState<"todos" | StatusAssociado>("todos");
  const [busca, setBusca] = useState("");
  const [carregando, setCarregando] = useState(true);
  const [modalFormulario, setModalFormulario] = useState(false);
  const [modalDetalhes, setModalDetalhes] = useState(false);
  const [associadoEmEdicao, setAssociadoEmEdicao] = useState<Associado | null>(null);
  const [detalhes, setDetalhes] = useState<DetalhesAssociado | null>(null);
  const [formulario, setFormulario] = useState(formularioInicial);

  async function carregarAssociados() {
    if (!token) return;
    setCarregando(true);
    try {
      const resposta = await servicoAssociados.listar(token, {
        busca: busca || undefined,
        status: filtroStatus === "todos" ? undefined : filtroStatus,
      });
      setAssociados(resposta.itens);
    } catch (erro) {
      toast.error(erro instanceof Error ? erro.message : "Erro ao carregar associados");
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => void carregarAssociados(), 250);
    return () => clearTimeout(timer);
  }, [token, busca, filtroStatus]);

  const associadosOrdenados = useMemo(
    () => [...associados].sort((a, b) => a.nome.localeCompare(b.nome)),
    [associados],
  );

  function abrirCriacao() {
    setAssociadoEmEdicao(null);
    setFormulario(formularioInicial);
    setModalFormulario(true);
  }

  function abrirEdicao(associado: Associado) {
    setAssociadoEmEdicao(associado);
    setFormulario({
      nome: associado.nome,
      cpf: associado.cpf,
      email: associado.email,
      telefone: associado.telefone,
      embarcacao: associado.embarcacao ?? "",
      numeroCarteira: associado.numeroCarteira,
      status: associado.status,
      observacoes: associado.observacoes ?? "",
    });
    setModalFormulario(true);
  }

  async function abrirDetalhes(associado: Associado) {
    if (!token) return;
    try {
      const resposta = await servicoAssociados.buscar(token, associado.id);
      setDetalhes(resposta as DetalhesAssociado);
      setModalDetalhes(true);
    } catch (erro) {
      toast.error(erro instanceof Error ? erro.message : "Erro ao buscar detalhes");
    }
  }

  async function salvarAssociado(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!token) return;

    try {
      if (associadoEmEdicao) {
        await servicoAssociados.atualizar(token, associadoEmEdicao.id, formulario);
        toast.success("Associado atualizado com sucesso");
      } else {
        await servicoAssociados.criar(token, formulario);
        toast.success("Associado cadastrado com sucesso");
      }
      setModalFormulario(false);
      setFormulario(formularioInicial);
      await carregarAssociados();
    } catch (erro) {
      toast.error(erro instanceof Error ? erro.message : "Erro ao salvar associado");
    }
  }

  async function alterarStatus(associado: Associado, status: StatusAssociado) {
    if (!token) return;
    const motivo =
      status === "suspenso" || status === "bloqueado"
        ? window.prompt("Informe o motivo da alteração de status:")
        : undefined;

    try {
      await servicoAssociados.alterarStatus(token, associado.id, status, motivo ?? undefined);
      toast.success(`Status de ${associado.nome} atualizado`);
      await carregarAssociados();
    } catch (erro) {
      toast.error(erro instanceof Error ? erro.message : "Erro ao alterar status");
    }
  }

  async function excluirAssociado(associado: Associado) {
    if (!token) return;
    if (!window.confirm(`Deseja realmente excluir ${associado.nome}?`)) return;

    try {
      await servicoAssociados.excluir(token, associado.id);
      toast.success("Associado excluído");
      await carregarAssociados();
    } catch (erro) {
      toast.error(erro instanceof Error ? erro.message : "Erro ao excluir associado");
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl text-slate-900">Gerenciar Associados</h1>
          <p className="text-slate-500">Cadastro, status, histórico e visão individual dos pescadores</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2" onClick={() => void carregarAssociados()}>
            <RefreshCw className="w-4 h-4" />
            Atualizar
          </Button>
          <Dialog open={modalFormulario} onOpenChange={setModalFormulario}>
            <DialogTrigger asChild>
              <Button className="gap-2" onClick={abrirCriacao}>
                <UserPlus className="w-4 h-4" />
                Novo Associado
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{associadoEmEdicao ? "Editar associado" : "Novo associado"}</DialogTitle>
              </DialogHeader>
              <form className="space-y-4" onSubmit={salvarAssociado}>
                <div className="grid gap-4 md:grid-cols-2">
                  <Input placeholder="Nome completo" value={formulario.nome} onChange={(event) => setFormulario((atual) => ({ ...atual, nome: event.target.value }))} />
                  <Input placeholder="CPF" value={formulario.cpf} onChange={(event) => setFormulario((atual) => ({ ...atual, cpf: event.target.value }))} />
                  <Input placeholder="E-mail" value={formulario.email} onChange={(event) => setFormulario((atual) => ({ ...atual, email: event.target.value }))} />
                  <Input placeholder="Telefone" value={formulario.telefone} onChange={(event) => setFormulario((atual) => ({ ...atual, telefone: event.target.value }))} />
                  <Input placeholder="Embarcação" value={formulario.embarcacao} onChange={(event) => setFormulario((atual) => ({ ...atual, embarcacao: event.target.value }))} />
                  <Input placeholder="Número da carteira" value={formulario.numeroCarteira} onChange={(event) => setFormulario((atual) => ({ ...atual, numeroCarteira: event.target.value }))} />
                </div>

                <Select
                  value={formulario.status}
                  onValueChange={(value) => setFormulario((atual) => ({ ...atual, status: value as StatusAssociado }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ativo">Ativo</SelectItem>
                    <SelectItem value="suspenso">Suspenso</SelectItem>
                    <SelectItem value="inadimplente">Inadimplente</SelectItem>
                    <SelectItem value="bloqueado">Bloqueado</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Observações"
                  value={formulario.observacoes}
                  onChange={(event) => setFormulario((atual) => ({ ...atual, observacoes: event.target.value }))}
                />

                <Button className="w-full" type="submit">
                  {associadoEmEdicao ? "Salvar alterações" : "Cadastrar associado"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                className="pl-10"
                placeholder="Buscar por nome, CPF ou email..."
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
              />
            </div>
            <Select value={filtroStatus} onValueChange={(value) => setFiltroStatus(value as "todos" | StatusAssociado)}>
              <SelectTrigger className="w-full md:w-[220px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filtrar por status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os status</SelectItem>
                <SelectItem value="ativo">Ativo</SelectItem>
                <SelectItem value="suspenso">Suspenso</SelectItem>
                <SelectItem value="inadimplente">Inadimplente</SelectItem>
                <SelectItem value="bloqueado">Bloqueado</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {carregando ? (
            <p className="py-10 text-center text-slate-500">Carregando associados...</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>CPF</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Embarcação</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Carteira</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {associadosOrdenados.map((associado) => (
                  <TableRow key={associado.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium text-slate-900">{associado.nome}</p>
                        <p className="text-sm text-slate-500">{associado.telefone}</p>
                      </div>
                    </TableCell>
                    <TableCell>{associado.cpf}</TableCell>
                    <TableCell>{associado.email}</TableCell>
                    <TableCell>{associado.embarcacao || "—"}</TableCell>
                    <TableCell>
                      <Badge className={statusClasse[associado.status]}>{associado.status}</Badge>
                    </TableCell>
                    <TableCell>{associado.numeroCarteira}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onSelect={(event) => {
                              event.preventDefault();
                              void abrirDetalhes(associado);
                            }}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            Ver detalhes
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onSelect={(event) => {
                              event.preventDefault();
                              abrirEdicao(associado);
                            }}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => void alterarStatus(associado, "ativo")}>
                            Marcar como ativo
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => void alterarStatus(associado, "suspenso")}>
                            Suspender
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => void alterarStatus(associado, "inadimplente")}>
                            Marcar inadimplente
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => void alterarStatus(associado, "bloqueado")}>
                            Bloquear
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600" onClick={() => void excluirAssociado(associado)}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Excluir
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          {!carregando && associadosOrdenados.length === 0 && (
            <div className="py-12 text-center text-slate-500">Nenhum associado encontrado</div>
          )}
        </CardContent>
      </Card>

      <Dialog open={modalDetalhes} onOpenChange={setModalDetalhes}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Detalhes do associado</DialogTitle>
          </DialogHeader>
          {detalhes && (
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Dados cadastrais</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><strong>Nome:</strong> {detalhes.nome}</p>
                    <p><strong>Status:</strong> {detalhes.status}</p>
                    <p><strong>Data de cadastro:</strong> {formatarData(detalhes.dataCadastro)}</p>
                    <p><strong>Carteira:</strong> {detalhes.numeroCarteira}</p>
                    <p><strong>Observações:</strong> {detalhes.observacoes || "—"}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Resumo operacional</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><strong>Lojas:</strong> {detalhes.lojas.length}</p>
                    <p><strong>Permissões:</strong> {detalhes.permissoes.length}</p>
                    <p><strong>Mensalidades recentes:</strong> {detalhes.mensalidades.length}</p>
                    <p><strong>Histórico de status:</strong> {detalhes.historicoStatus.length}</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Mensalidades</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  {detalhes.mensalidades.slice(0, 6).map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-b-0">
                      <span>{item.competencia}</span>
                      <span>{formatarMoeda(item.valor)}</span>
                      <Badge className={item.status === "pago" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                  {detalhes.mensalidades.length === 0 && <p className="text-slate-500">Nenhuma mensalidade registrada.</p>}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Histórico de status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  {detalhes.historicoStatus.map((item) => (
                    <div key={item.id} className="border-b border-slate-100 pb-2 last:border-b-0">
                      <p>
                        {item.statusAnterior} → {item.statusNovo}
                      </p>
                      <p className="text-slate-500">
                        {formatarData(item.alteradoEm)} {item.motivo ? `• ${item.motivo}` : ""}
                      </p>
                    </div>
                  ))}
                  {detalhes.historicoStatus.length === 0 && <p className="text-slate-500">Nenhuma alteração registrada.</p>}
                </CardContent>
              </Card>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
