import React from "react";
import MovieSimpleDetail from "../Components/MovieSimpleDetail";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function Mypage() {
  const { likedMovies } = useSelector((state) => state.likedMovies);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    
    navigate("/");
  }

  return (
    <>
      <h2>Mypage</h2>
      <div>내가 찜한 영화</div>
      <div style={{ display: "flex", gap: "1rem" }}>
        {/* {likedMovies.map((likedMovie) => {

          const {title, poster_path, id} = likedMovie

          return (
            <MovieSimpleDetail
              title={title}
              poster_path={poster_path}
              id={id}
            ></MovieSimpleDetail>
          );
        })} */}
        <MovieSimpleDetail></MovieSimpleDetail>
        <MovieSimpleDetail></MovieSimpleDetail>
        <MovieSimpleDetail></MovieSimpleDetail>
        <MovieSimpleDetail></MovieSimpleDetail>
      </div>
      <button onClick={handleLogout}>로그아웃</button>
    </>
  );
}
