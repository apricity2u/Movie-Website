import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import movieApi from "../api/movieApi";
import MovieSimpleDetail from "./MovieSimpleDetail";

export default function RootHeaderSearch() {
  const [movieInput, setMovieInput] = useState();

  async function handleMovieInput(e) {
    const data = await movieApi.searchMovie(e.target.value);

    setMovieInput(data.results);
  }

  return (
    <div className="movie-search-bar">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search movie what you want !"
        onChange={handleMovieInput}
        className="movie-search-style"
      />
      <ul className="movie-category-style">
        {movieInput.slice(0, 5).map((movie) => {
          const { id, title, poster_path } = movie;

          return (
            <MovieSimpleDetail
              title={title}
              id={id}
              poster_path={poster_path}
            ></MovieSimpleDetail>
          );
        })}
      </ul>
    </div>
  );
}
