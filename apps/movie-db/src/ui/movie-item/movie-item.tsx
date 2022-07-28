import { Movie } from '@movie-db/data/movies';

export interface MovieItemProps {
  movie: Movie;
}

export function MovieItem(props: MovieItemProps) {
  const { poster, title, year } = props.movie;

  return (
    <div
      className="flex flex-col border rounded shadow
      hover:shadow-xl hover:cursor-pointer
    hover:bg-sky-200 hover:shadow-sky-200 hover:border-sky-200"
    >
      <img className="w-full h-64 object-cover" alt={title} src={poster}></img>
      <div className="p-2">
        <div className="font-semibold">{title}</div>
        <div className="text-slate-500 text-sm">{year}</div>
      </div>
    </div>
  );
}

export default MovieItem;
