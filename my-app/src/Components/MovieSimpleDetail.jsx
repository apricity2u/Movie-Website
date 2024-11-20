import React from "react";
import { Link } from "react-router-dom";

export default function MovieSimpleDetail({ title, poster_path, id }) {
  return (
    <div className="movie-simple-detail">
      <Link to={`/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="영화포스터"
          width="300"
          height="450"
        />
        <h3 className="movie-title">{title}</h3>
      </Link>
    </div>
  );
}
