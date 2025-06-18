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
import TodoPage from "../pages/TodoPage.tsx";
import VirtualizedListPage from "../pages/VirtualizedListPage.tsx";
import StepperPage from "../pages/StepperPage.tsx";
import TabPage from "../pages/TabPage.tsx";
import MemoryGamePage from "../pages/MemoryGamePage.tsx";
import CommentBoxPage from "../pages/CommentBoxPage.tsx";
import TrafficLightPage from "../pages/TrafficLightPage.tsx";
import CalendarPage from "../pages/CalendarPage.tsx";
import MemoHookPage from "../pages/MemoHookPage.tsx";

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
      {
        path: "todo",
        Component: TodoPage,
      },
      {
        path: "vlist",
        Component: VirtualizedListPage,
      },
      {
        path: "stepper",
        Component: StepperPage,
      },
      {
        path: "tab",
        Component: TabPage,
      },
      {
        path: "memory-game",
        Component: MemoryGamePage,
      },
      {
        path: "comment-box",
        Component: CommentBoxPage,
      },
      {
        path: "traffic-light",
        Component: TrafficLightPage,
      },
      {
        path: "calendar",
        Component: CalendarPage,
      },
      {
        path: "memo",
        Component: MemoHookPage,
      },
    ],
  },
]);
