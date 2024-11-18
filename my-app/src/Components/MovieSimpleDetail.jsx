import React from "react";
import { Link } from "react-router-dom";

export default function MovieSimpleDetail() {
  return (
    <Link to='/movie_detail'>
      <div>
        <img src="" alt="영화포스터" />
        <h3>영화제목</h3>
      </div>
    </Link>
  );
}
