import { ErrorResponse, Movie, SearchResponse } from './movies';

const API = `http://www.omdbapi.com/?apikey=b8b8c7dd`;

const mapMovie: (data: any) => Movie = (data) => ({
  imdbID: data.imdbID,
  poster: data.Poster === 'N/A' ? '' : data.Poster,
  title: data.Title,
  year: data.Year,
});

export const getMovie = (id: string) =>
  fetch(`${API}&i=${id}`)
    .then((data) => data.json())
    .then(mapMovie);

export const searchMovies = async (
  term: string,
  page: number
): Promise<SearchResponse | ErrorResponse> => {
  try {
    const data = await fetch(`${API}&s=${term}&type=movie&page=${page}`);
    const res = await data.json();
    return {
      response: res.Response,
      search: (res.Search || []).map(mapMovie),
      totalResults: res.totalResults || 0,
    };
  } catch (err) {
    console.log(err);
    return {
      message: 'Service unavailable',
    };
  }
};
