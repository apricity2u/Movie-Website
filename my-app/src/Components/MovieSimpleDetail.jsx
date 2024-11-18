import React from "react";
import { Link } from "react-router-dom";

export default function MovieSimpleDetail({title, poster_path}) {

  return (
    <div>
      <Link to="/movie_detail">
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="영화포스터" width="200" height="300"/>
        <h3>{title}</h3>
      </Link>
    </div>
  );
}
