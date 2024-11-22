import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import movieApi from "../api/movieApi";
import MovieSimpleDetail from "./MovieSimpleDetail";
import Button from "./Button";

export default function RootHeaderSearch() {
  const [movieFormData, setMovieFormData] = useState();
  const [movieInput, setMovieInput] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await movieApi.searchMovie(movieInput);

    setMovieFormData(data.results);
  }

  function handleMovieInput(e) {
    setMovieInput(e.target.value);
  }

  return (
    <div className="movie-search-bar">
      <form onSubmit={handleSubmit} className="movie-search-style">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search movie what you want !"
          onChange={handleMovieInput}
        />
        <Button>Search!</Button>
      </form>
      {movieFormData && (
        <ul className="movie-category-style">
          {movieFormData.slice(0, 5).map((movie) => {
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
    </div>
  );
}
