import { Movie } from './movies';

const API = `http://www.omdbapi.com/?apikey=b8b8c7dd`;

const mapMovie: (data: any) => Movie = (data) => ({
  imdbID: data.imdbID,
  poster: data.Poster,
  title: data.Title,
  year: data.Year,
});

export const getMovie = (id: string) =>
  fetch(`${API}&i=${id}`)
    .then((data) => data.json())
    .then(mapMovie);

export const searchMovies = (term: string) =>
  fetch(`${API}&s=${term}&type=movie`)
    .then((data) => data.json())
    .then((res) => {
      const results = res.Search;
      if (results) {
        return results.map(mapMovie);
      } else {
        return [];
      }
    });
