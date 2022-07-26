import { Movies, getMovie, searchMovies } from '@movie-db/data/movies';
import { useEffect, useState } from 'react';
import MovieItem from '../../ui/movie-item/movie-item';
import SearchBar from '../../ui/search-bar/search-bar';

export function MovieLanding() {
  const myMovies = [
    'tt0094641',
    'tt0074084',
    'tt0206634',
    'tt0121766',
    'tt0245429',
    'tt0073629',
    'tt0120737',
    'tt0247745',
    'tt0373074',
  ];

  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movies>([]);

  const fetchFavMovies = () => Promise.all(myMovies.map((id) => getMovie(id)));

  // Añadir paginación con scroll infinito
  const handleSearch = (term: string) => {
    setLoading(true);
    searchMovies(term)
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchFavMovies()
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);

  return (
    <div>
      <SearchBar onChange={handleSearch}></SearchBar>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div
          className="p-4 grid gap-4 grid-cols-2
          md:grid-cols-4 lg:grid-cols-6 xl:w-4/5 xl:mx-auto"
        >
          {movies.map((movie) => (
            <MovieItem key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieLanding;
