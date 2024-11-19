import React from "react";
import { Link } from "react-router-dom";
import RootHeaderNav from "./RootHeaderNav";
import { useSelector } from "react-redux";

export default function RootHeader() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const categories = [
    {
      path: "now_playing",
      title: "Now Playing",
    },
    {
      path: "popular",
      title: "Popular",
    },
    {
      path: "top_rated",
      title: "Top Rated",
    },
  ];

  return (
    <header>
      <h1>Movie</h1>
      <RootHeaderNav categories={categories}></RootHeaderNav>
      {!isLoggedIn && (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
      {isLoggedIn && (
        <Link to="/mypage">
          <button>MyPage</button>
        </Link>
      )}
    </header>
  );
}
