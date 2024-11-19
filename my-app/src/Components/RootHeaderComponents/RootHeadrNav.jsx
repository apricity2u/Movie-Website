import React from 'react'
import { Link } from "react-router-dom";

export default function RootHeadrNav({categories}) {
  return (
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
  )
}
