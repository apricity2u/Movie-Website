import api from "./axios";

const movieApi = {
  getMovieList: async (path) => {
    const resposne = await api.get(
      `/${path}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    );
    return resposne.data;
  },
};

export default movieApi;
