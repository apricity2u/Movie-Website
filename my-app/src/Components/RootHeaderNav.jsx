import React from "react";
import { Link } from "react-router-dom";

export default function RootHeaderNav({ categories }) {
  return (
    <nav>
      <ul className="flex-box justify-content-center">
        <li key="Home" className="text-center">
          <Link to="/">Home</Link>
        </li>
        {categories.map((category) => {
          const { path, title } = category;

          return (
            <li key={path} className="text-center">
              <Link to={`/${path}`}>{`${title} List`}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
