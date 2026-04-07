import { Users, Store, CheckCircle, TrendingUp, AlertCircle, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { mockAssociados, mockLojas, mockReunioes } from "../data/mockData";

export function Dashboard() {
  const associadosAtivos = mockAssociados.filter(a => a.status === "ativo").length;
  const associadosInadimplentes = mockAssociados.filter(a => a.status === "inadimplente").length;
  const lojasPendentes = mockLojas.filter(l => l.status === "pendente").length;
  const lojasAprovadas = mockLojas.filter(l => l.status === "aprovada").length;
  const reunioesAgendadas = mockReunioes.filter(r => r.status === "agendada").length;

  const stats = [
    {
      title: "Total de Associados",
      value: mockAssociados.length,
      icon: Users,
      description: `${associadosAtivos} ativos`,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Lojas Ativas",
      value: lojasAprovadas,
      icon: Store,
      description: `${lojasPendentes} aguardando aprovação`,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Reuniões Agendadas",
      value: reunioesAgendadas,
      icon: Calendar,
      description: "Próximas assembleias",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Inadimplentes",
      value: associadosInadimplentes,
      icon: AlertCircle,
      description: "Requerem atenção",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  const recentActivity = [
    { type: "associado", message: "Carlos Ferreira foi cadastrado", time: "2 horas atrás" },
    { type: "loja", message: "Nova loja 'Empório do Mar' aguardando aprovação", time: "3 horas atrás" },
    { type: "reuniao", message: "Assembleia Geral agendada para 15/04", time: "5 horas atrás" },
    { type: "permissao", message: "Permissão de venda concedida para João da Silva", time: "1 dia atrás" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl text-slate-900">Dashboard</h1>
        <p className="text-slate-500">Visão geral do sistema de gerenciamento</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">{stat.title}</p>
                  <p className="text-3xl mt-2 text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-600 mt-1">{stat.description}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-900">{activity.message}</p>
                    <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors text-left">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium text-slate-900">Aprovar Lojas Pendentes</p>
                  <p className="text-sm text-slate-500">{lojasPendentes} lojas aguardando</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors text-left">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="font-medium text-slate-900">Verificar Inadimplentes</p>
                  <p className="text-sm text-slate-500">{associadosInadimplentes} associados</p>
                </div>
              </button>
              <button className="w-full flex items-center gap-3 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors text-left">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium text-slate-900">Ver Relatórios</p>
                  <p className="text-sm text-slate-500">Análise de desempenho</p>
                </div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}