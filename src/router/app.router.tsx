import { createBrowserRouter } from "react-router";
import { lazy } from "react";

import { AdminLayouts } from "@/admin/layouts/AdminLayouts";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayouts } from "@/heroes/layouts/HeroesLayouts";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
// import { SearchPage } from "@/heroes/pages/search/SearchPage";

const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayouts />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: `heroes/:idSlug`,
        element: <HeroPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path:"*",
        element: <h1>404 PEDAZO DE BOLUDO</h1>

      },


    ],
  },
  {
    path: "/admin",
    element: <AdminLayouts />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
