import React from "react";
import { Link } from "react-router-dom";
import RootHeaderNav from "./RootHeaderNav";
import { useSelector } from "react-redux";
import Button from "./Button";
import RootHeaderSearch from "./RootHeaderSearch";

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
      <div className="main-header">
        <div></div>
        <Link to="/">
          <h1 className="main-title">Movie</h1>
        </Link>
        {isLoggedIn ? (
          <Link to="/mypage">
            <Button>MyPage</Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>
      <RootHeaderNav categories={categories}></RootHeaderNav>
      <RootHeaderSearch categories={categories}></RootHeaderSearch>
    </header>
  );
}
