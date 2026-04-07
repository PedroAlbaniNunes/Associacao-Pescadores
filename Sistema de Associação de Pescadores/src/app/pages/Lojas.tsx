import { useState } from "react";
import { Search, Store as StoreIcon, Check, X, Eye, MoreVertical } from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
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
import { mockLojas, type StatusLoja } from "../data/mockData";
import { toast } from "sonner";

export function Lojas() {
  const [filtroStatus, setFiltroStatus] = useState<string>("todos");
  const [busca, setBusca] = useState("");

  const lojasFiltradas = mockLojas.filter((loja) => {
    const matchStatus = filtroStatus === "todos" || loja.status === filtroStatus;
    const matchBusca = loja.nomeLoja.toLowerCase().includes(busca.toLowerCase()) ||
                       loja.associadoNome.toLowerCase().includes(busca.toLowerCase());
    return matchStatus && matchBusca;
  });

  const getStatusBadge = (status: StatusLoja) => {
    const variants = {
      aprovada: { label: "Aprovada", className: "bg-green-100 text-green-800 hover:bg-green-100" },
      pendente: { label: "Pendente", className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" },
      rejeitada: { label: "Rejeitada", className: "bg-red-100 text-red-800 hover:bg-red-100" },
    };
    
    const config = variants[status];
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const handleAprovar = (nomeLoja: string) => {
    toast.success(`Loja "${nomeLoja}" aprovada com sucesso!`);
  };

  const handleRejeitar = (nomeLoja: string) => {
    toast.error(`Loja "${nomeLoja}" rejeitada`);
  };

  const lojasPendentes = lojasFiltradas.filter(l => l.status === "pendente");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-slate-900">Aprovação de Lojas</h1>
          <p className="text-slate-500">Gerencie as solicitações de lojas dos pescadores</p>
        </div>
        {lojasPendentes.length > 0 && (
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 px-3 py-1">
            {lojasPendentes.length} pendente{lojasPendentes.length !== 1 ? 's' : ''}
          </Badge>
        )}
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Buscar por nome da loja ou associado..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filtroStatus} onValueChange={setFiltroStatus}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <StoreIcon className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filtrar por status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os Status</SelectItem>
                <SelectItem value="pendente">Pendente</SelectItem>
                <SelectItem value="aprovada">Aprovada</SelectItem>
                <SelectItem value="rejeitada">Rejeitada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Loja</TableHead>
                <TableHead>Associado</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Produtos</TableHead>
                <TableHead>Data Solicitação</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lojasFiltradas.map((loja) => (
                <TableRow key={loja.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <StoreIcon className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="font-medium text-slate-900">{loja.nomeLoja}</p>
                    </div>
                  </TableCell>
                  <TableCell>{loja.associadoNome}</TableCell>
                  <TableCell className="max-w-xs">
                    <p className="text-sm text-slate-600 truncate">{loja.descricao}</p>
                  </TableCell>
                  <TableCell>{loja.produtos}</TableCell>
                  <TableCell>{new Date(loja.dataSolicitacao).toLocaleDateString('pt-BR')}</TableCell>
                  <TableCell>{getStatusBadge(loja.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      {loja.status === "pendente" && (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            className="gap-2 text-green-700 border-green-300 hover:bg-green-50"
                            onClick={() => handleAprovar(loja.nomeLoja)}
                          >
                            <Check className="w-4 h-4" />
                            Aprovar
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="gap-2 text-red-700 border-red-300 hover:bg-red-50"
                            onClick={() => handleRejeitar(loja.nomeLoja)}
                          >
                            <X className="w-4 h-4" />
                            Rejeitar
                          </Button>
                        </>
                      )}
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
                          {loja.status !== "pendente" && (
                            <DropdownMenuItem onClick={() => toast.info(`Reabrindo análise de ${loja.nomeLoja}`)}>
                              Reabrir Análise
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {lojasFiltradas.length === 0 && (
            <div className="text-center py-12">
              <StoreIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">Nenhuma loja encontrada</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
