import React from "react";
import { Link } from "react-router-dom";
import MovieSimpleDetail from "../Components/MovieSimpleDetail";
import MovieCategory from "../Components/MovieCategory";

export default function Home() {
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
    <ul>
      {categories.map((category) => {
        const { path, title } = category;

        return (
          <li>
            <MovieCategory path={`/${path}`}>{title}</MovieCategory>
          </li>
        );
      })}
    </ul>
  );
}
