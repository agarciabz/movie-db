import MovieItem from '../../ui/movie-item/movie-item';
import styles from './movie-landing.module.scss';

/* eslint-disable-next-line */
export interface MovieLandingProps {}

export function MovieLanding(props: MovieLandingProps) {
  const myMovies = [...Array(9).keys()];

  return (
    <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:w-4/5 xl:mx-auto">
      {myMovies.map(movie => (<MovieItem key={movie}/>))}
    </div>
  );
}

export default MovieLanding;
