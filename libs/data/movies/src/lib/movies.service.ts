import { Movie, OmdbResponse } from './movies';

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

export const searchMovies = (term: string, page: number) =>
  fetch(`${API}&s=${term}&type=movie&page=${page}`)
    .then((data) => data.json())
    .then((res) => {
      const results = res.Search;
      if (results) {
        const response: OmdbResponse = {
          response: res.Response,
          search: results.map(mapMovie),
          totalResults: res.totalResults,
        };
        return response;
      } else {
        const response: OmdbResponse = {
          response: res.Response,
          search: [],
          totalResults: 0,
        };
        return response;
      }
    });
