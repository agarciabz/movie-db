import styles from './movie-item.module.scss';

/* eslint-disable-next-line */
export interface MovieItemProps {}

export function MovieItem(props: MovieItemProps) {
  const {poster, name} = {
    poster: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
    name: 'Guardians of the Galaxy Vol. 2'
  };

  return (
    <div className="bg-yellow-200 p-2 flex flex-col">
      <img alt="poster" src={poster}></img>
      <div>{name}</div>
    </div>
  );
}

export default MovieItem;
