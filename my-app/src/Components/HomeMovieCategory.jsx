import React from "react";
import { Link } from "react-router-dom";
import MovieSimpleDetail from "./MovieSimpleDetail";
import movieApi from "../api/movieApi";
import { useState, useEffect } from "react";
import Button from "./Button";

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
      <div className="flex-box">
        <div className="sub-title-box">
          <h2 className="sub-title">{children}</h2>
          <Link to={`/${path}`}>
            <Button>more</Button>
          </Link>
        </div>
      </div>
      <ul className="flex-box justify-content-center">
        {movies.slice(0, 5).map((movie) => {
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
