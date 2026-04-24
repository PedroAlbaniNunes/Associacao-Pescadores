import { Navigate, Outlet } from "react-router";
import { useAutenticacao } from "../hooks/useAutenticacao";

export function RotaProtegida() {
  const { autenticado, carregando } = useAutenticacao();

  if (carregando) {
    return <div className="min-h-screen flex items-center justify-center text-slate-500">Carregando sessão...</div>;
  }

  if (!autenticado) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export function RotaPublica() {
  const { autenticado, carregando } = useAutenticacao();

  if (carregando) {
    return <div className="min-h-screen flex items-center justify-center text-slate-500">Carregando sessão...</div>;
  }

  if (autenticado) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
