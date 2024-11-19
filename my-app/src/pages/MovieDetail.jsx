import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import movieApi from "../api/movieApi";
import {
  addLikedMovie,
  removeLikedMovie,
} from "../store/slices/likedMovieSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeLikedStatus } from "../store/slices/isLikedSlice";

export default function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState({});
  const [movieReviews, setMovieReview] = useState([]);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { isLiked } = useSelector((state) => state.isLiked);
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovieDetail() {
      const data = await movieApi.getMovieDetail(movieId);
      const reviewData = await movieApi.getMovieReview(movieId);

      setMovieDetail(data);
      setMovieReview(reviewData.results);
    }
    fetchMovieDetail();
  }, []);

  function myMovieStatus(e) {
    if (!isLoggedIn) {
      navigate("/login");
    }

    dispatch(changeLikedStatus(isLiked));

    dispatch(
      isLiked ? addLikedMovie(movieDetail) : removeLikedMovie(movieDetail)
    );
    e.target.style.backgroundColor = isLiked ? "pink" : "";
  }

  const { title, poster_path, overview } = movieDetail;

  return (
    <>
      <h2>MovieDetail</h2>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="사진 불러오는 중"
          width="200px"
        />
        <div style={{ display: "flex" }}>
          <h3>{title}</h3>
          <button onClick={myMovieStatus}>찜</button>
        </div>
        <div>
          <h4>줄거리</h4>
          <p>{overview}</p>
        </div>
        <div>
          <h4>후기</h4>
          {movieReviews.map((review) => {
            const { author, content } = review;

            return (
              <>
                <div>Reviewer: {author}</div>
                <p>{content}</p>;
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
