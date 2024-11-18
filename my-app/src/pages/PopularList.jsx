import React from "react";
import MovieSimpleDetail from "../Components/MovieSimpleDetail";
import { useEffect, useState } from "react";
import movieApi from "../api/movieApi";

export default function PopularList() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovieList() {
      const data = await movieApi.getMovieList("popular");

      setMovies(data.results);
    }
    fetchMovieList();
  });

  return (
    <>
      <h2>Popular List</h2>
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
