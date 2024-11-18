import React from "react";
import MovieSimpleDetail from "../Components/MovieSimpleDetail";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import movieApi from "../api/movieApi";

export default function MovieListMore() {

  const { category } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovieList() {
      const data = await movieApi.getMovieList(category);

      setMovies(data.results);
    }
    fetchMovieList();
  });

  return (
    <>
      <h2>{category}</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        {movies.map((movie) => {
          const { title, poster_path } = movie;
          return (
            <MovieSimpleDetail
              title={title}
              poster_path={poster_path}
            ></MovieSimpleDetail>
          );
        })}
      </div>
    </>
  );
}
