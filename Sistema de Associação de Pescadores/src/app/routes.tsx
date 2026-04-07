import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { Associados } from "./pages/Associados";
import { Lojas } from "./pages/Lojas";
import { Permissoes } from "./pages/Permissoes";
import { Reunioes } from "./pages/Reunioes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "associados", Component: Associados },
      { path: "lojas", Component: Lojas },
      { path: "permissoes", Component: Permissoes },
      { path: "reunioes", Component: Reunioes },
    ],
  },
]);