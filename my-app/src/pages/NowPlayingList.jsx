import React from "react";
import MovieListContainer from "../Components/MovieListContainer";

export default function NowPlayingList() {

  return (
    <>
      <h2 className="sub-title margin text-center">Now Playing List</h2>
      <MovieListContainer>now_playing</MovieListContainer>
    </>
  );
}
