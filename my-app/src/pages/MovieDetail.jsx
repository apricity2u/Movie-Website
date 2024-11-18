import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../api/movieApi";

export default function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState({});
  const [movieReviews, setMovieReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieDetail() {
      const data = await movieApi.getMovieDetail(movieId);
      const reviewData = await movieApi.getMovieReview(movieId);

      setMovieDetail(data);
      setMovieReview(reviewData.results);
    }
    fetchMovieDetail();
  }, []);

  const { title, poster_path, overview } = movieDetail;

  return (
    <>
      <h2>MovieDetail</h2>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`${title}`}
          width="200px"
        />
        <div style={{ display: "flex" }}>
          <h3>{title}</h3>
          <button>찜</button>
        </div>
        <div>
          <h4>줄거리</h4>
          <p>{overview}</p>
        </div>
        <div>
          <h4>후기</h4>
          {movieReviews.map((review) => {
            return (
            <>
              <div>Reviewer: {review.author}</div>
              <p>{review.content}</p>;
            </>
            )
          })}
        </div>
      </div>
    </>
  );
}
