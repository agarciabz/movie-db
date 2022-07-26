import styles from './movie-landing.module.scss';

/* eslint-disable-next-line */
export interface MovieLandingProps {}

export function MovieLanding(props: MovieLandingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MovieLanding!</h1>
    </div>
  );
}

export default MovieLanding;
