import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../RootLayout";
import NowPlayingList from "../pages/NowPlayingList";
import PopularList from "../pages/PopularList";
import TopRatedList from "../pages/TopRatedList";
import MovieDetail from "../pages/MovieDetail";
import Mypage from "../pages/Mypage";

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
        path: '/now_playing',
        element: <NowPlayingList />
      },
      {
        path: '/popular',
        element: <PopularList />
      },
      {
        path: '/top_rated',
        element: <TopRatedList />
      },
      {
        path: '/movie_detail',
        element: <MovieDetail />
      },
      {
        path: '/mypage',
        element: <Mypage />
      }
    ],
  },
]);

export default router;