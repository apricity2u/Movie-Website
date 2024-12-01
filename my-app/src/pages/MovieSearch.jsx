import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import movieApi from "../api/movieApi";
import MovieSimpleDetail from "../Components/MovieSimpleDetail";

export default function MovieSearch() {
  const [movieSearchData, setMovieSearchData] = useState();

  const location = useLocation();
  const movieInput = location.state;

  useEffect(() => {
    async function fetchSearchResults() {
      try {
        if (movieInput) {
          const data = await movieApi.searchMovie(movieInput);
          setMovieSearchData(data);
        }
      } catch {
        console.error("에러다!");
      }
    }
    fetchSearchResults();
  }, [movieInput]);

  return (
    <>
      {movieSearchData ? (
        <div className="movie-category-style flex-wrap">
          {movieSearchData.map((movie) => {
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
      ) : (
        <div>어떤 영화를 찾고 계신가요?</div>
      )}
    </>
  );
}
