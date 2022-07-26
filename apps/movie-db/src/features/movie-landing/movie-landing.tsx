import MovieItem from '../../ui/movie-item/movie-item';
import styles from './movie-landing.module.scss';

/* eslint-disable-next-line */
export interface MovieLandingProps {}

export function MovieLanding(props: MovieLandingProps) {
  const myMovies = ["tt0094641", "tt0074084", "tt0206634",
                    "tt0121766", "tt0245429", "tt0073629",
                  "tt0120737", "tt0247745", "tt0373074"];

  return (
    <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:w-4/5 xl:mx-auto">
      {myMovies.map(movie => (<MovieItem key={movie}/>))}
    </div>
  );
}

export default MovieLanding;
