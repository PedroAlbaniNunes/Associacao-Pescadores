import { useState } from "react";
import { Calendar, Plus, Users, FileText, MapPin, Clock, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Checkbox } from "../components/ui/checkbox";
import { mockReunioes, type StatusReuniao, mockAssociados } from "../data/mockData";
import { toast } from "sonner";

export function Reunioes() {
  const [reunioes, setReunioes] = useState(mockReunioes);
  const [selectedReuniao, setSelectedReuniao] = useState<typeof mockReunioes[0] | null>(null);

  const getStatusBadge = (status: StatusReuniao) => {
    const variants = {
      agendada: { label: "Agendada", className: "bg-blue-100 text-blue-800 hover:bg-blue-100" },
      em_andamento: { label: "Em Andamento", className: "bg-green-100 text-green-800 hover:bg-green-100" },
      concluida: { label: "Concluída", className: "bg-slate-100 text-slate-800 hover:bg-slate-100" },
      cancelada: { label: "Cancelada", className: "bg-red-100 text-red-800 hover:bg-red-100" },
    };
    
    const config = variants[status];
    return <Badge className={config.className}>{config.label}</Badge>;
  };

  const handleTogglePresenca = (reuniaoId: string, associadoId: string, presente: boolean) => {
    setReunioes(reunioes.map(r => {
      if (r.id === reuniaoId) {
        return {
          ...r,
          presencas: r.presencas.map(p => 
            p.associadoId === associadoId ? { ...p, presente } : p
          )
        };
      }
      return r;
    }));
  };

  const handleIniciarReuniao = (reuniaoId: string) => {
    setReunioes(reunioes.map(r => 
      r.id === reuniaoId ? { ...r, status: "em_andamento" as StatusReuniao } : r
    ));
    toast.success("Reunião iniciada!");
  };

  const handleFinalizarReuniao = (reuniaoId: string) => {
    setReunioes(reunioes.map(r => 
      r.id === reuniaoId ? { ...r, status: "concluida" as StatusReuniao } : r
    ));
    toast.success("Reunião finalizada!");
  };

  const reunioesAgendadas = reunioes.filter(r => r.status === "agendada");
  const reunioesEmAndamento = reunioes.filter(r => r.status === "em_andamento");
  const reunioesConcluidas = reunioes.filter(r => r.status === "concluida");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-slate-900">Reuniões de Associados</h1>
          <p className="text-slate-500">Gerencie assembleias e encontros da associação</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Agendar Reunião
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Agendadas</p>
                <p className="text-3xl mt-2 text-slate-900">{reunioesAgendadas.length}</p>
              </div>
              <div className="p-3 rounded-lg bg-blue-50">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Em Andamento</p>
                <p className="text-3xl mt-2 text-slate-900">{reunioesEmAndamento.length}</p>
              </div>
              <div className="p-3 rounded-lg bg-green-50">
                <Users className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Concluídas</p>
                <p className="text-3xl mt-2 text-slate-900">{reunioesConcluidas.length}</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50">
                <CheckCircle className="w-6 h-6 text-slate-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="agendadas" className="w-full">
        <TabsList>
          <TabsTrigger value="agendadas">Agendadas ({reunioesAgendadas.length})</TabsTrigger>
          <TabsTrigger value="em_andamento">Em Andamento ({reunioesEmAndamento.length})</TabsTrigger>
          <TabsTrigger value="concluidas">Concluídas ({reunioesConcluidas.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="agendadas" className="space-y-4 mt-4">
          {reunioesAgendadas.map((reuniao) => (
            <Card key={reuniao.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-slate-900">{reuniao.titulo}</h3>
                      {getStatusBadge(reuniao.status)}
                    </div>
                    <p className="text-slate-600 mb-4">{reuniao.descricao}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-700">
                          {new Date(reuniao.data).toLocaleDateString('pt-BR', { 
                            day: '2-digit', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-700">{reuniao.horario}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-700">{reuniao.local}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-slate-700 mb-2">Pauta:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {reuniao.pauta.map((item, index) => (
                          <li key={index} className="text-sm text-slate-600">{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-700">
                        {reuniao.presencas.length} associado{reuniao.presencas.length !== 1 ? 's' : ''} convocado{reuniao.presencas.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedReuniao(reuniao)}
                        >
                          <Users className="w-4 h-4 mr-2" />
                          Presença
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Lista de Presença - {reuniao.titulo}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-3 max-h-[400px] overflow-y-auto">
                          {reuniao.presencas.map((presenca) => (
                            <div key={presenca.associadoId} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                              <span className="text-slate-900">{presenca.associadoNome}</span>
                              <div className="flex items-center gap-2">
                                <Checkbox
                                  checked={presenca.presente}
                                  onCheckedChange={(checked) => 
                                    handleTogglePresenca(reuniao.id, presenca.associadoId, checked as boolean)
                                  }
                                />
                                <span className="text-sm text-slate-500">
                                  {presenca.presente ? "Presente" : "Ausente"}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button 
                      size="sm"
                      onClick={() => handleIniciarReuniao(reuniao.id)}
                    >
                      Iniciar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          {reunioesAgendadas.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">Nenhuma reunião agendada</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="em_andamento" className="space-y-4 mt-4">
          {reunioesEmAndamento.map((reuniao) => (
            <Card key={reuniao.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-slate-900">{reuniao.titulo}</h3>
                      {getStatusBadge(reuniao.status)}
                    </div>
                    <p className="text-slate-600 mb-4">{reuniao.descricao}</p>
                    
                    <div className="flex items-center gap-2 text-sm mb-4">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-slate-700">
                        {reuniao.presencas.filter(p => p.presente).length} de {reuniao.presencas.length} presentes
                      </span>
                    </div>
                  </div>

                  <Button 
                    size="sm"
                    onClick={() => handleFinalizarReuniao(reuniao.id)}
                  >
                    Finalizar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          {reunioesEmAndamento.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <Users className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">Nenhuma reunião em andamento</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="concluidas" className="space-y-4 mt-4">
          {reunioesConcluidas.map((reuniao) => {
            const presentes = reuniao.presencas.filter(p => p.presente).length;
            const total = reuniao.presencas.length;
            const percentual = Math.round((presentes / total) * 100);

            return (
              <Card key={reuniao.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-slate-900">{reuniao.titulo}</h3>
                        {getStatusBadge(reuniao.status)}
                      </div>
                      <p className="text-slate-600 mb-4">{reuniao.descricao}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-700">
                            {new Date(reuniao.data).toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-700">
                            {presentes} de {total} presentes ({percentual}%)
                          </span>
                        </div>
                      </div>

                      {reuniao.ata && (
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <FileText className="w-4 h-4 text-slate-600" />
                            <span className="font-medium text-slate-900">Ata da Reunião</span>
                          </div>
                          <p className="text-sm text-slate-600">{reuniao.ata}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      Ver Ata Completa
                    </Button>
                    <Button variant="outline" size="sm">
                      Exportar PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
          {reunioesConcluidas.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">Nenhuma reunião concluída</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
