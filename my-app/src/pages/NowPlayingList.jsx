import React from "react";
import MovieSimpleDetail from "../Components/MovieSimpleDetail";
import { useEffect, useState } from "react";
import movieApi from "../api/movieApi";

export default function NowPlayingList() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovieList() {
      const data = await movieApi.getMovieList("now_playing");

      setMovies(data.results);
    }
    fetchMovieList();
  });

  return (
    <>
      <h2>Now Playing List</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", textAlign: "center", fontSize: "0.8rem" }}>
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
