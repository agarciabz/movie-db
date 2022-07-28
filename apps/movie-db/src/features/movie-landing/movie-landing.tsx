import {
  Movies,
  getMovie,
  searchMovies,
  OmdbResponse,
} from '@movie-db/data/movies';
import { useEffect, useRef, useState } from 'react';
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

  const placeholderNum = 24;

  const [page, setPage] = useState(0);
  const [searchTerm, setSearch] = useState('');

  const [isLoading, setLoading] = useState(false);
  const isLoadingRef = useRef(isLoading);

  const [movies, setMovies] = useState<Movies>([]);
  const moviesRef = useRef(movies);

  const [results, setResults] = useState(0);
  const resultsRef = useRef(results);

  const bottomRef = useRef<HTMLDivElement>(null);

  const fetchFavMovies = () => Promise.all(myMovies.map((id) => getMovie(id)));

  const fetchMovies = (movies: Movies) => {
    setMovies((current) => [...current, ...movies]);
  };

  const loadNextPage = () => {
    setPage((current) => current + 1);
  };

  const areResultsRemaining = () =>
    !isLoadingRef.current && moviesRef.current.length < resultsRef.current;

  useEffect(() => {
    // Mount
    setLoading(true);
    fetchFavMovies()
      .then((data) => {
        setMovies(data);
        moviesRef.current = data;
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
    // Setup scroll
    const options: IntersectionObserverInit = {
      root: document,
      rootMargin: '20px',
      threshold: 1,
    };
    const callback: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[]
    ) => {
      if (entries[0].isIntersecting) {
        console.debug('Bottom reached!!');
        if (areResultsRemaining()) {
          loadNextPage();
        }
      }
    };
    const observer = new IntersectionObserver(callback, options);
    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }
    // Unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (searchTerm !== '') {
      setPage(1);
    }
  }, [searchTerm]);

  useEffect(() => {
    console.log('page', page);
    if (page > 0) {
      if (page === 1) {
        setMovies([]);
      }
      setLoading(true);
      searchMovies(searchTerm, page)
        .then((res: OmdbResponse) => {
          if (res.search.length) {
            fetchMovies(res.search);
            setResults(res.totalResults);
            resultsRef.current = res.totalResults;
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [page]);

  useEffect(() => {
    console.log('results', results);
  }, [results]);

  const handleInput = (term: string) => {
    setSearch(term);
  };

  return (
    <div>
      <div className="sticky top-0  z-10">
        <SearchBar onChange={handleInput}></SearchBar>
      </div>
      <div
        className="p-4 grid gap-4 grid-cols-2
          md:grid-cols-4 lg:grid-cols-6 xl:w-4/5 xl:mx-auto"
        id="movieList"
      >
        {movies.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} loaded={true} />
        ))}
        {isLoading &&
          [...Array(placeholderNum)].map((_, num) => (
            <MovieItem key={num} loaded={false} />
          ))}
      </div>
      {/* Bottom */}
      <div ref={bottomRef}></div>
    </div>
  );
}

export default MovieLanding;
