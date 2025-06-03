import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout.tsx";
import Home from "../pages/Home.tsx";
import ToastNotification from "../pages/ToastNotification.tsx";
import StarPage from "../pages/StarPage.tsx";
import PaginationPage from "../pages/PaginationPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "toast",
        Component: ToastNotification,
      },
      {
        path: "star",
        Component: StarPage,
      },
      {
        path: "pagination",
        Component: PaginationPage,
      },
    ],
  },
]);
