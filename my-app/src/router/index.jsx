import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../RootLayout";
import NowPlayingList from "../pages/NowPlayingList";
import PopularList from "../pages/PopularList";
import TopRatedList from "../pages/TopRatedList";
import MovieDetail from "../pages/MovieDetail";
import Mypage from "../pages/Mypage";
import LoginForm from "../pages/LoginForm";
import NotFound from "../pages/NotFound";

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
        path: '/mypage',
        element: <Mypage />
      },
      {
        path: '/:movieId',
        element: <MovieDetail />
      }
    ],
  },{
    path:'/not_found',
    element: <NotFound/>
  },
  {
    path: '/login',
    element: <LoginForm />
  }
]);

export default router;