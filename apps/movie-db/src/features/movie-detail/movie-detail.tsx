import styles from './movie-detail.module.scss';

/* eslint-disable-next-line */
export interface MovieDetailProps {}

export function MovieDetail(props: MovieDetailProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MovieDetail!</h1>
    </div>
  );
}

export default MovieDetail;
