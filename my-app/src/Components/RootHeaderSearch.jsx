import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function RootHeaderSearch() {
  const navigate = useNavigate();

  function handleMovieInput(e) {
    if (e.target.value) {
      navigate("/search", {state: e.target.value})
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
