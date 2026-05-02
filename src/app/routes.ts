import { createBrowserRouter } from "react-router-dom";
import { Entrance } from "./pages/Entrance";
import { Selection } from "./pages/Selection";
import { AllCards } from "./pages/AllCards";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Entrance,
  },
  {
    path: "/leitura",
    Component: Selection,
  },
  {
    path: "/deck",
    Component: AllCards,
  },
]);
