import { Movie } from "./movies";

const API = `http://www.omdbapi.com/?apikey=b8b8c7dd`;

const mapMovie: (data: any) => Movie = (data) => ({
  imdbID: data.imdbID,
  poster: data.Poster,
  title: data.Title,
  year: data.Year
});

export const getMovie = (id: string) => fetch(`${API}&i=${id}`).then((data) => data.json()).then(mapMovie);