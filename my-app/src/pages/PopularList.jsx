import React from "react";
import MovieSimpleDetail from "../Components/MovieSimpleDetail";

export default function PopularList() {
  return (
    <>
      <h2>PopularList</h2>
      <div style={{ display: "flex", gap: "1rem" }}>
        <MovieSimpleDetail></MovieSimpleDetail>
        <MovieSimpleDetail></MovieSimpleDetail>
        <MovieSimpleDetail></MovieSimpleDetail>
        <MovieSimpleDetail></MovieSimpleDetail>
      </div>
    </>
  );
}
