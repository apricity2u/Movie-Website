import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import movieApi from "../api/movieApi";
import {
  addLikedMovie,
  removeLikedMovie,
} from "../store/slices/likedMovieSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState({});
  const [movieReviews, setMovieReview] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const likedMovies = useSelector((state) => state.likedMovies);

  const { movieId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buttonRef = useRef(null);

  useEffect(() => {
    async function fetchMovieDetail() {
      const data = await movieApi.getMovieDetail(movieId);
      const reviewData = await movieApi.getMovieReview(movieId);

      setMovieDetail(data);
      setMovieReview(reviewData.results);

      buttonRef.current.style.backgroundColor =
      movieId in likedMovies ? "pink" : "";
    }
    fetchMovieDetail();
  }, [movieId]);

  useEffect(() => {
    dispatch(
      isLiked ? addLikedMovie(movieDetail) : removeLikedMovie(movieDetail)
    );
    buttonRef.current.style.backgroundColor = isLiked ? "pink" : "";
  }, [isLiked]);

  function myMovieStatus() {
    if (!isLoggedIn) {
      alert('로그인 후 사용 가능합니다.')
      navigate("/login");
    }

    setIsLiked(!isLiked);
  }

  const { title, poster_path, overview, release_date, runtime } = movieDetail;

  return (
    <>
      <h2 className="sub-title margin text-center">MovieDetail</h2>
      <div>
        <div className="movie-detail-box">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt="영화포스터"
          />
          <div>
            <div className="movie-detail">
              <h3 className="movie-title">{title}</h3>
              <h4>Released Date: {`${release_date}`}</h4>
              <h4>Runing Time: {`${runtime}min`}</h4>
              <h4>Overview</h4>
              <p>{overview}</p>
              <button
                onClick={myMovieStatus}
                ref={buttonRef}
                className="button-style"
              >
                ♡
              </button>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-center">Review</h4>
          <ul>
            {movieReviews.map((review) => {
              const { author, content } = review;

              return (
                <li key={content} className="review-style">
                  <h5>Reviewer: {author}</h5>
                  <hr />
                  <p>{content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
