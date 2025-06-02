import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout.tsx";
import Home from "../pages/Home.tsx";
import ToastNotification from "../pages/ToastNotification.tsx";
import StarPage from "../pages/StarPage.tsx";

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
    ],
  },
]);
