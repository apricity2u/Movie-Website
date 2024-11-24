import React, { useRef, useState } from "react";
import movieApi from "../api/movieApi";
import MovieSimpleDetail from "./MovieSimpleDetail";
import Button from "./Button";
import { useSelector } from "react-redux";

export default function RootHeaderSearch() {  
  const [movieFormData, setMovieFormData] = useState();
  const [movieInput, setMovieInput] = useState();
  const formRef = useRef();

  // 검색어 reset 버튼
  function handleSearchReset() {
    setMovieInput("");
    formRef.current.reset();
    setMovieFormData("");
  }

  // 영화 검색 기능
  async function handleSubmit(e) {
    e.preventDefault();
    const data = await movieApi.searchMovie(movieInput);

    setMovieFormData(data.results);
  }

  function handleMovieInput(e) {
    // 검색어 지우면 초기화
    if (!e.target.value) {
      formRef.current.reset();
      setMovieFormData("");
    }

    setMovieInput(e.target.value);
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
            // 자동완성 텍스트도 감지할 수 있게 onChange 대신 onInput 사용
            onInput={handleMovieInput}
            required
          />
          {
            // 검색어가 없으면 리셋버튼 안보임
            movieFormData && (
              <button onClick={handleSearchReset} className="reset-button">
                X
              </button>
            )
          }
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
