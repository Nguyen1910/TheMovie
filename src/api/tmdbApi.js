import axios from "axios";
import apiConfig from "./ApiConfig";

export const CATEGORY = {
  movie: "movie",
  tv: "tv",
};

export const MOVIETYPE = {
  popular: "popular",
  upcoming: "upcoming",
  top_rated: "top_rated",
};

export const TVTYPE = {
  popular: "popular",
  top_rated: "top_rated",
};

const tmdbApi = {
  async getMovieList(category, type, params) {
    try {
      const url = `${apiConfig.baseUrl}${category}/${MOVIETYPE[type]}?api_key=${apiConfig.apiKey}&language=en-US&page=${params.page}`;
      const response = await axios.get(url);
      const result = response.data;
      return result;
    } catch (error) {}
  },
  async getMovie(category, id) {
    try {
      const url = `${apiConfig.baseUrl}${category}/${id}?api_key=${apiConfig.apiKey}`;
      const response = await axios.get(url);
      const result = response.data;
      return result;
    } catch (error) {}
  },
  async getCredit(category, id) {
    try {
      const url = `${apiConfig.baseUrl}${category}/${id}/credits?api_key=${apiConfig.apiKey}&language=en-US`;
      const response = await axios.get(url);
      const result = response.data;
      return result;
    } catch (error) {}
  },
  async search(searchInput, params) {
    try {
      const url = `${apiConfig.baseUrl}search/company?api_key=${apiConfig.apiKey}&query=${searchInput}&page=${params.page}`;
      const response = await axios.get(url);
      const result = response.data;
      return result;
    } catch (error) {}
  },

  async getVideos(category, id) {
    try {
      const url = `${apiConfig.baseUrl}${category}/${id}/videos?api_key=${apiConfig.apiKey}`;
      const response = await axios.get(url);
      const result = response.data;
      return result;
    } catch (error) {}
  },

  // async getMovieSimilar (type, params) {
  //     const url = `${apiConfig.baseUrl}movie/${movieType[type]}?api_key=${apiConfig.apiKey}&language=en-US&page=${params.page}`
  //     const response = await axios.get(url)
  //     const result = response.data.results
  //     console.log(result)
  // }
  // https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=37858bb0389ab9916f43a4ca104982a5&language=en-US&page=1
};

export default tmdbApi;
