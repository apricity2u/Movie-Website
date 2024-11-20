import React from "react";
import { Link } from "react-router-dom";
import MovieSimpleDetail from "./MovieSimpleDetail";
import movieApi from "../api/movieApi";
import { useState, useEffect } from "react";

export default function HomeMovieCategory({ children, path }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovieList() {
      const data = await movieApi.getMovieList(path);

      setMovies(data.results);
    }
    fetchMovieList();
  });

  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        <h2>{children}</h2>
        <Link to={`/${path}`}>
          <button>...more</button>
        </Link>
      </div>
      <ul style={{ display: "flex", gap: "1rem", textAlign: "center" }}>
        {movies.slice(0, 10).map((movie) => {
          const { title, poster_path, id } = movie;
          return (
            <li key={id}>
              <MovieSimpleDetail
                title={title}
                poster_path={poster_path}
                id={id}
              ></MovieSimpleDetail>
            </li>
          );
        })}
      </ul>
    </>
  );
}
