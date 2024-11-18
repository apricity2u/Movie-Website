import React from "react";
import MovieSimpleDetail from "../Components/MovieSimpleDetail";

export default function NowPlayingList() {
  return (
    <>
      <h2>NowPlayingList</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <MovieSimpleDetail></MovieSimpleDetail>
        <MovieSimpleDetail></MovieSimpleDetail>
        <MovieSimpleDetail></MovieSimpleDetail>
        <MovieSimpleDetail></MovieSimpleDetail>
      </div>
    </>
  );
}
