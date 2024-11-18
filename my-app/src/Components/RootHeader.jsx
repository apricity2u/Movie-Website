import React from "react";
import { Link } from "react-router-dom";

export default function RootHeader() {

  function handleSubmit(e) {
    e.preventDefault();
  }


  return (
    <header>
      <h1>Movie</h1>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/now_playing">
            <li>Now Playing List</li>
          </Link>
          <Link to="/popular">
            <li>Popular List</li>
          </Link>
          <Link to="/top_rated">
            <li>Top Rated List</li>
          </Link>
        </ul>
      </nav>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user">Username</label>
        <input type="text" name="user" id="user" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button>로그인</button>
      </form>
      <Link to="/mypage">
        <button>마이페이지</button>
      </Link>
    </header>
  );
}
