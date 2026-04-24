import { Outlet, NavLink } from "react-router";
import {
  Users,
  Store,
  ShieldCheck,
  Calendar,
  LayoutDashboard,
  Fish,
  CreditCard,
  LogOut,
} from "lucide-react";
import { Button } from "./ui/button";
import { useAutenticacao } from "../hooks/useAutenticacao";

export function Layout() {
  const { usuario, sair } = useAutenticacao();

  const navItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/associados", label: "Associados", icon: Users },
    { path: "/lojas", label: "Lojas", icon: Store },
    { path: "/permissoes", label: "Permissões", icon: ShieldCheck },
    { path: "/reunioes", label: "Reuniões", icon: Calendar },
    { path: "/mensalidades", label: "Mensalidades", icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f4fbff_0%,#f8fafc_18%,#f8fafc_100%)]">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="flex flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-sm">
              <Fish className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-slate-900">Associação de Pescadores</h1>
              <p className="text-sm text-slate-500">Operação e governança da associação</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900">{usuario?.nome}</p>
              <p className="text-xs text-slate-500">{usuario?.email}</p>
            </div>
            <Button variant="outline" className="gap-2" onClick={sair}>
              <LogOut className="w-4 h-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row">
        <aside className="w-full border-b border-slate-200 bg-white/80 md:min-h-[calc(100vh-89px)] md:w-64 md:border-b-0 md:border-r">
          <nav className="flex gap-1 overflow-x-auto p-4 md:flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                    isActive
                      ? "bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium whitespace-nowrap">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
