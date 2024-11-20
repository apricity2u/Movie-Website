import React from "react";
import MovieListContainer from "../Components/MovieListContainer";

export default function PopularList() {

  return (
    <>
      <h2 className="sub-title margin">Popular List</h2>
      <MovieListContainer>popular</MovieListContainer>
    </>
  );
}
