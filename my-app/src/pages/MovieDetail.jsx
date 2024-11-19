import React, { useEffect, useState } from "react";
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
    
    setIsLiked(!isLiked);
    dispatch(
      isLiked ? removeLikedMovie(movieDetail) : addLikedMovie(movieDetail)
    );
    e.target.style.backgroundColor = isLiked ? "" : "pink";

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
              <div key={content}>
                <div>Reviewer: {author}</div>
                <p>{content}</p>;
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
