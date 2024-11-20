import React from "react";
import { Link } from "react-router-dom";

export default function RootHeaderNav({ categories }) {
  return (
    <nav>
      <ul>
        <li key="Home">
          <Link to="/">Home</Link>
        </li>
        {categories.map((category) => {
          const { path, title } = category;

          return (
            <li key={path}>
              <Link to={`/${path}`}>{`${title} List`}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
