import React from "react";
import { Link } from "react-router-dom";

export default function RootHeader() {
  const categories = [
    {
      path: "now_playing",
      title: "Now Playing",
    },
    {
      path: "popular",
      title: "Popular",
    },
    {
      path: "top_rated",
      title: "Top Rated",
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <header>
      <h1>Movie</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {categories.map((category) => {
            const { path, title } = category;

            return (
              <li>
                <Link to={`/${path}`}>{`${title} List`}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", width: "200px"}}>
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
