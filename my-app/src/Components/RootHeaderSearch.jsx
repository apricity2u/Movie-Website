import React, { useState } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

export default function RootHeaderSearch() {
  const [movieInput, setMovieInput] = useState();
  const navigate = useNavigate()

  function handleMovieInput(e) {
    if (e.target.value) {
      setMovieInput(e.target.value);

      navigate("/search")
    }
  }

  return (
    <>
      <div className="movie-search-bar">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search movie what you want !"
            onChange={handleMovieInput}
            required
          />
        <Button>Search</Button>
      </div>
    </>
  );
}
