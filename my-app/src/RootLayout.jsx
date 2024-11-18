import React from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <h1>Movie</h1>
      </header>
      <Outlet></Outlet>
      <footer>copyright HAEUN</footer>
    </>
  );
}