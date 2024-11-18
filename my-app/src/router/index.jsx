import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../RootLayout";
import MovieDetail from "../pages/MovieDetail";
import Mypage from "../pages/Mypage";
import MovieListMore from "../pages/MovieListMore";

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
        path: '/mypage',
        element: <Mypage />
      },
      {
        path: '/movie_detail',
        element: <MovieDetail />
      },
      {
        path: '/:category',
        element: <MovieListMore />
      },
    ],
  },
]);

export default router;