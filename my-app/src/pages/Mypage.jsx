import React from "react";
import MovieSimpleDetail from "../Components/MovieSimpleDetail";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

export default function Mypage() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const likedMovies = useSelector((state) => state.likedMovies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const likedMoviesList = Object.values(likedMovies);

  function handleLogout() {
    dispatch(logout());

    navigate("/");
  }

  if (isLoggedIn === false) {
    navigate("/");
  }

  return (
    <>
      <h2 className="sub-title margin">Mypage</h2>
      <h3 className="font-size-bigger">My Movie</h3>
      <div className="flex-box">
        {likedMoviesList.map((likedMovie) => {
          const { title, poster_path, id } = likedMovie;

          return (
            <MovieSimpleDetail
              title={title}
              poster_path={poster_path}
              id={id}
            ></MovieSimpleDetail>
          );
        })}
      </div>
      <Button onClick={handleLogout} className="button-style">
        Logout
      </Button>
    </>
  );
}
