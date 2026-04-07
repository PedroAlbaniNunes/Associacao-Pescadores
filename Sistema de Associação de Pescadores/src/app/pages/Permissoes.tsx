import { useState } from "react";
import { Search, ShieldCheck, Plus, MoreVertical, Edit, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Switch } from "../components/ui/switch";
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
import { mockPermissoes } from "../data/mockData";
import { toast } from "sonner";

export function Permissoes() {
  const [busca, setBusca] = useState("");
  const [permissoes, setPermissoes] = useState(mockPermissoes);

  const permissoesFiltradas = permissoes.filter((permissao) => {
    const matchBusca = permissao.associadoNome.toLowerCase().includes(busca.toLowerCase()) ||
                       permissao.tipoPermissao.toLowerCase().includes(busca.toLowerCase());
    return matchBusca;
  });

  const handleTogglePermissao = (id: string, ativa: boolean) => {
    setPermissoes(permissoes.map(p => 
      p.id === id ? { ...p, ativa } : p
    ));
    const permissao = permissoes.find(p => p.id === id);
    toast.success(`Permissão ${ativa ? 'ativada' : 'desativada'} para ${permissao?.associadoNome}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-slate-900">Permissões de Venda</h1>
          <p className="text-slate-500">Gerencie as permissões dos associados</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Nova Permissão
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Buscar por associado ou tipo de permissão..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Associado</TableHead>
                <TableHead>Tipo de Permissão</TableHead>
                <TableHead>Período</TableHead>
                <TableHead>Quota</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {permissoesFiltradas.map((permissao) => (
                <TableRow key={permissao.id}>
                  <TableCell>
                    <p className="font-medium text-slate-900">{permissao.associadoNome}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                      <span>{permissao.tipoPermissao}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p className="text-slate-900">
                        {new Date(permissao.dataInicio).toLocaleDateString('pt-BR')}
                      </p>
                      {permissao.dataFim && (
                        <p className="text-slate-500">
                          até {new Date(permissao.dataFim).toLocaleDateString('pt-BR')}
                        </p>
                      )}
                      {!permissao.dataFim && (
                        <p className="text-slate-500">Indeterminado</p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {permissao.quota ? (
                      <span className="font-mono text-sm">{permissao.quota} kg</span>
                    ) : (
                      <span className="text-slate-400">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Switch
                        checked={permissao.ativa}
                        onCheckedChange={(checked) => handleTogglePermissao(permissao.id, checked)}
                      />
                      <Badge className={permissao.ativa 
                        ? "bg-green-100 text-green-800 hover:bg-green-100" 
                        : "bg-gray-100 text-gray-800 hover:bg-gray-100"
                      }>
                        {permissao.ativa ? "Ativa" : "Inativa"}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Renovar Permissão
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Ajustar Quota
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Revogar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {permissoesFiltradas.length === 0 && (
            <div className="text-center py-12">
              <ShieldCheck className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">Nenhuma permissão encontrada</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* API Info Card */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-slate-900">API para Marketplace</h3>
          <p className="text-sm text-slate-500">Endpoint para consulta de permissões ativas</p>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-900 text-slate-50 p-4 rounded-lg font-mono text-sm">
            <p className="text-green-400">GET</p>
            <p className="mt-2">https://api.associacao-pescadores.com/v1/permissoes</p>
            <p className="mt-4 text-slate-400">// Retorna permissões ativas dos associados</p>
          </div>
          <div className="mt-4 flex gap-2">
            <Button variant="outline" size="sm">Ver Documentação</Button>
            <Button variant="outline" size="sm">Gerar API Key</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
