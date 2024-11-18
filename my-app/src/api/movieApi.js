import api from "./axios";

const params = new URLSearchParams({
  api_key : `${import.meta.env.VITE_TMDB_KEY}`,
  language : "ko"
})

const movieApi = {
  getMovieList: async (path) => {
    const resposne = await api.get(
      `/${path}?${params}`
    );
    return resposne.data;
  }, 
  getMovieDetail: async (movieId) => {
    const resposne = await api.get(
      `/${movieId}?${params}`
    );
    return resposne.data;
  },
};

export default movieApi;
