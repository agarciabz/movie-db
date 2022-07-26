import { Movie } from '@movie-db/data/movies';

export interface MovieItemProps {
  movie: Movie;
}

export function MovieItem(props: MovieItemProps) {
  const {poster, title} = props.movie;

  return (
    <div className="p-2 flex flex-col space-y-2 border rounded shadow hover:shadow-xl hover:cursor-pointer hover:bg-sky-200 hover:shadow-sky-200">
      <img alt={title} src={poster}></img>
      <div>{title}</div>
    </div>
  );
}

export default MovieItem;
