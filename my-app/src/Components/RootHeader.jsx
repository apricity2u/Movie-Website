import React from "react";
import { Link } from "react-router-dom";
import RootHeadrNav from "./RootHeaderComponents/RootHeadrNav";
import RootHeaderForm from "./RootHeaderComponents/RootHeaderForm";

export default function RootHeader() {
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
      <RootHeadrNav categories = {categories}></RootHeadrNav>
      <RootHeaderForm></RootHeaderForm>
      <Link to="/mypage">
        <button>마이페이지</button>
      </Link>
    </header>
  );
}
