import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { RotaProtegida, RotaPublica } from "./components/ProtecaoRotas";
import { Dashboard } from "./pages/Dashboard";
import { Associados } from "./pages/Associados";
import { Lojas } from "./pages/Lojas";
import { Permissoes } from "./pages/Permissoes";
import { Reunioes } from "./pages/Reunioes";
import { Login } from "./pages/Login";
import { Mensalidades } from "./pages/Mensalidades";

export const router = createBrowserRouter([
  {
    Component: RotaPublica,
    children: [{ path: "/login", Component: Login }],
  },
  {
    Component: RotaProtegida,
    children: [
      {
        path: "/",
        Component: Layout,
        children: [
          { index: true, Component: Dashboard },
          { path: "associados", Component: Associados },
          { path: "lojas", Component: Lojas },
          { path: "permissoes", Component: Permissoes },
          { path: "reunioes", Component: Reunioes },
          { path: "mensalidades", Component: Mensalidades },
        ],
      },
    ],
  },
]);
