import api from "./axios";

const params = new URLSearchParams({
  api_key: `${import.meta.env.VITE_TMDB_KEY}`
});

const movieApi = {
  getMovieList: async (path) => {
    const response = await api.get(`/movie/${path}?${params}`);
    return response.data;
  },
  getMovieDetail: async (movieId) => {
    const response = await api.get(`/movie/${movieId}?${params}`);
    return response.data;
  },
  getMovieReview: async (movieId) => {
    const response = await api.get(`/movie/${movieId}/reviews?${params}`);
    return response.data;
  },
  searchMovie: async (movieTitle) => {
    const response = await api.get(`/search/movie?query=${movieTitle}&${params}`)
    return response.data
  }
};

export default movieApi;
