import React from 'react'
import MovieSimpleDetail from './MovieSimpleDetail';
import { useEffect, useState } from "react";
import movieApi from '../api/movieApi';

export default function MovieListContainer({children}) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovieList() {
      const data = await movieApi.getMovieList(children);

      setMovies(data.results);
    }
    fetchMovieList();
  });

  return (
    <div className='movie-category-style flex-wrap'>
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
  )
}
