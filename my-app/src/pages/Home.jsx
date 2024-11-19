import React, { useState } from "react";
import HomeMovieCategory from "../Components/HomeComponent/HomeMovieCategory";

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
            <HomeMovieCategory path={path}>{title}</HomeMovieCategory>
          </li>
        );
      })}
    </ul>
  );
}
