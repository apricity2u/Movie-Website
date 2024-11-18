import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../RootLayout";
import NowPlayingList from "../pages/NowPlayingList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'now_playing',
        element: <NowPlayingList />
      }
    ],
  },
]);

export default router;