import React from "react";
import { Link } from "react-router-dom";
import RootHeaderNav from "./RootHeaderNav";
import { useSelector } from "react-redux";
import Button from "./Button";

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
      <h1 className="main-title">Movie</h1>
      {!isLoggedIn && (
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      )}
      <RootHeaderNav categories={categories}></RootHeaderNav>
      <div className="text-center margin">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search movie"
        />
      </div>
      {isLoggedIn && (
        <Link to="/mypage">
          <Button>MyPage</Button>
        </Link>
      )}
    </header>
  );
}
