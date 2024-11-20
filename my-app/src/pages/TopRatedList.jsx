import React from "react";
import MovieListContainer from "../Components/MovieListContainer";

export default function TopRatedList() {

  return (
    <>
      <h2 className="sub-title margin"> Top Rated List</h2>
      <MovieListContainer>top_rated</MovieListContainer>
    </>
  );
}

