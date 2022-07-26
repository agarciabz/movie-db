import styles from './movie-item.module.scss';

/* eslint-disable-next-line */
export interface MovieItemProps {}

export function MovieItem(props: MovieItemProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MovieItem!</h1>
    </div>
  );
}

export default MovieItem;
