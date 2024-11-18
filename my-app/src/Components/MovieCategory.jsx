import React from "react";
import { Link } from "react-router-dom";
import MovieSimpleDetail from "../MovieSimpleDetail";

export default function MovieCategory({ children, path }) {
  return (
    <li>
      <div style={{ display: "flex", gap: "1rem" }}>
        <h2>{children}</h2>
        <Link to={`${path}`}>
          <button>...more</button>
        </Link>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <MovieSimpleDetail></MovieSimpleDetail>
        <MovieSimpleDetail></MovieSimpleDetail>
        <MovieSimpleDetail></MovieSimpleDetail>
        <MovieSimpleDetail></MovieSimpleDetail>
      </div>
    </li>
  );
}
