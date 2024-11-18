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
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", textAlign: "center", fontSize: "0.8rem" }}>
        {movies.map((movie) => {
          const { title, poster_path, id } = movie;
          return (
            <MovieSimpleDetail
              title={title}
              poster_path={poster_path}
              id={id}
            ></MovieSimpleDetail>
          );
        })}
      </div>
    </>
  );
}
