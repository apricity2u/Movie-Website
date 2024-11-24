import React, { useRef, useState } from "react";
import movieApi from "../api/movieApi";
import MovieSimpleDetail from "./MovieSimpleDetail";
import Button from "./Button";

export default function RootHeaderSearch() {
  const [movieFormData, setMovieFormData] = useState();
  const [movieInput, setMovieInput] = useState();
  const formRef = useRef();

  function handleSearchReset() {
    setMovieInput("");
    formRef.current.reset();
    setMovieFormData("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await movieApi.searchMovie(movieInput);

    setMovieFormData(data.results);
  }

  function handleMovieInput(e) {
    setMovieInput(e.target.value);
    console.log(movieInput)
  }

  return (
    <div className="movie-search-bar">
      <form
        onSubmit={handleSubmit}
        ref={formRef}
        className="movie-search-style"
      >
        <div className="flex gap">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search movie what you want !"
            onInput={handleMovieInput}
            required
          />
          {movieFormData && (
            <button onClick={handleSearchReset} className="reset-button">
              X
            </button>
          )}
        </div>
        <Button>Search</Button>
      </form>
      {movieFormData && (
        <ul className="movie-category-style margin">
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
