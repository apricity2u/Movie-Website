import React from "react";

export default function RootHeaderSearch({categories}) {

  

  function handleMovieInput() {
      
  }

  return (
    <div className="movie-search-bar">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search movie what you want !"
        onChange={handleMovieInput}
        className="movie-search-style"
      />
    </div>
  );
}
