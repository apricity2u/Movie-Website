import React from "react";

export default function RootHeaderSearch() {
  return (
    <div className="movie-search-bar">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search movie what you want !"
        className="movie-search-style"
      />
    </div>
  );
}
