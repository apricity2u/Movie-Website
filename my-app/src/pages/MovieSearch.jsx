import React from "react";
import { useLocation } from "react-router-dom";

export default function MovieSearch(movieInput) {
  const location = useLocation();

  const movieInput = location.state;

  return (
    <>
      {movieInput && (
        <ul className="movie-category-style margin">
          {movieData.slice(0, 5).map((movie) => {
            const { id, title, poster_path } = movie;

            return (
              <li key={id}>
                <MovieSimpleDetail
                  title={title}
                  id={id}
                  poster_path={poster_path}
                ></MovieSimpleDetail>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
