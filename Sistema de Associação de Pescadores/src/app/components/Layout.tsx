import { Outlet, NavLink } from "react-router";
import { Users, Store, ShieldCheck, Calendar, LayoutDashboard, Fish } from "lucide-react";

export function Layout() {
  const navItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/associados", label: "Associados", icon: Users },
    { path: "/lojas", label: "Lojas", icon: Store },
    { path: "/permissoes", label: "Permissões", icon: ShieldCheck },
    { path: "/reunioes", label: "Reuniões", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="flex items-center gap-3 px-6 py-4">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
            <Fish className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-slate-900">Associação de Pescadores</h1>
            <p className="text-sm text-slate-500">Sistema de Gerenciamento</p>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 min-h-[calc(100vh-73px)]">
          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}