import { useState } from "react";
import { Search, Filter, UserPlus, MoreVertical, Eye, Edit, Trash2 } from "lucide-react";
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
import { mockAssociados, type StatusAssociado } from "../data/mockData";
import { toast } from "sonner";

export function Associados() {
  const [filtroStatus, setFiltroStatus] = useState<string>("todos");
  const [busca, setBusca] = useState("");

  const associadosFiltrados = mockAssociados.filter((associado) => {
    const matchStatus = filtroStatus === "todos" || associado.status === filtroStatus;
    const matchBusca = associado.nome.toLowerCase().includes(busca.toLowerCase()) ||
                       associado.cpf.includes(busca) ||
                       associado.email.toLowerCase().includes(busca.toLowerCase());
    return matchStatus && matchBusca;
  });

  const getStatusBadge = (status: StatusAssociado) => {
    const variants = {
      ativo: { variant: "default" as const, label: "Ativo", className: "bg-green-100 text-green-800 hover:bg-green-100" },
      suspenso: { variant: "secondary" as const, label: "Suspenso", className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" },
      inadimplente: { variant: "destructive" as const, label: "Inadimplente", className: "bg-red-100 text-red-800 hover:bg-red-100" },
    };
    
    const config = variants[status];
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const handleChangeStatus = (associadoNome: string, novoStatus: StatusAssociado) => {
    toast.success(`Status de ${associadoNome} alterado para ${novoStatus}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-slate-900">Gerenciar Associados</h1>
          <p className="text-slate-500">Controle de status e informações dos pescadores</p>
        </div>
        <Button className="gap-2">
          <UserPlus className="w-4 h-4" />
          Novo Associado
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Buscar por nome, CPF ou email..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filtroStatus} onValueChange={setFiltroStatus}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filtrar por status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os Status</SelectItem>
                <SelectItem value="ativo">Ativo</SelectItem>
                <SelectItem value="suspenso">Suspenso</SelectItem>
                <SelectItem value="inadimplente">Inadimplente</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
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
              {associadosFiltrados.map((associado) => (
                <TableRow key={associado.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium text-slate-900">{associado.nome}</p>
                      <p className="text-sm text-slate-500">{associado.telefone}</p>
                    </div>
                  </TableCell>
                  <TableCell>{associado.cpf}</TableCell>
                  <TableCell>{associado.email}</TableCell>
                  <TableCell>{associado.embarcacao}</TableCell>
                  <TableCell>{getStatusBadge(associado.status)}</TableCell>
                  <TableCell className="font-mono text-sm">{associado.numeroCarteira}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          Ver Detalhes
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleChangeStatus(associado.nome, "ativo")}>
                          Marcar como Ativo
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleChangeStatus(associado.nome, "suspenso")}>
                          Suspender
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleChangeStatus(associado.nome, "inadimplente")}>
                          Marcar Inadimplente
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {associadosFiltrados.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">Nenhum associado encontrado</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
