import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout.tsx";
import Home from "../pages/Home.tsx";
import ToastNotification from "../pages/ToastNotification.tsx";
import StarPage from "../pages/StarPage.tsx";
import PaginationPage from "../pages/PaginationPage.tsx";
import OtpPage from "../pages/OtpPage.tsx";
import CarouselPage from "../pages/CarouselPage.tsx";
import SearchPage from "../pages/SearchPage.tsx";
import InfiniteScrollPage from "../pages/InfiniteScrollPage.tsx";
import ProgressBarPage from "../pages/ProgressBarPage.tsx";
import AccordionPage from "../pages/AccordionPage.tsx";
import StopWatchPage from "../pages/StopWatchPage.tsx";
import FileExplorerPage from "../pages/FileExplorerPage.tsx";
import InteractiveShapePage from "../pages/InteractiveShapePage.tsx";
import TicTacToePage from "../pages/TicTacToePage.tsx";
import SnakePage from "../pages/SnakePage.tsx";

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
      {
        path: "otp",
        Component: OtpPage,
      },
      {
        path: "carousel",
        Component: CarouselPage,
      },
      {
        path: "search",
        Component: SearchPage,
      },
      {
        path: "infinitescroll",
        Component: InfiniteScrollPage,
      },
      {
        path: "progressbar",
        Component: ProgressBarPage,
      },
      {
        path: "accordion",
        Component: AccordionPage,
      },
      {
        path: "stopwatch",
        Component: StopWatchPage,
      },
      {
        path: "fileexplorer",
        Component: FileExplorerPage,
      },
      {
        path: "interactiveshape",
        Component: InteractiveShapePage,
      },
      {
        path: "tictactoe",
        Component: TicTacToePage,
      },
      {
        path: "snake",
        Component: SnakePage,
      },
    ],
  },
]);
