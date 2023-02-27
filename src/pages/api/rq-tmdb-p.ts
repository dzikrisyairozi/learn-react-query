export const BASE_URL = "https://api.themoviedb.org/3";
export const API_KEY = "13ab43d1b624f8fdacb3c497a65e5a0e";

export async function getPopularMovies(page = 1) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    const data = await response.json();
    return data;
  }
  