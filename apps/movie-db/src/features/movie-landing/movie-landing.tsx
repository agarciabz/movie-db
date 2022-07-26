import MovieItem from '../../ui/movie-item/movie-item';
import styles from './movie-landing.module.scss';

/* eslint-disable-next-line */
export interface MovieLandingProps {}

export function MovieLanding(props: MovieLandingProps) {
  const myMovies = [...Array(9).keys()];

  return (
    <div className="p-4">
      {myMovies.map(movie => (<MovieItem/>))}
    </div>
  );
}

export default MovieLanding;
