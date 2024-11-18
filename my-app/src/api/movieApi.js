import api from "./axios";

const params = new URLSearchParams({
  api_key: `${import.meta.env.VITE_TMDB_KEY}`,
  language: "ko",
});

const engParams = new URLSearchParams({
  api_key: `${import.meta.env.VITE_TMDB_KEY}`
});

const movieApi = {
  getMovieList: async (path) => {
    const response = await api.get(`/${path}?${params}`);
    return response.data;
  },
  getMovieDetail: async (movieId) => {
    const response = await api.get(`/${movieId}?${params}`);
    return response.data;
  },
  getMovieReview: async (movieId) => {
    const response = await api.get(`/${movieId}/reviews?${engParams}`);
    return response.data;
  },
};

export default movieApi;
