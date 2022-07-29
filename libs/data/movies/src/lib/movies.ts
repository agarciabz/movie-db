export interface SearchResponse {
  search: Movies; // Movies
  totalResults: number;
  response: boolean;
}

export interface ErrorResponse {
  message: string;
}

export interface Movie {
  poster: string;
  title: string;
  year: string;
  imdbID: string;
}

export type Movies = Movie[];

export const responseIsError = (
  res: SearchResponse | ErrorResponse
): res is ErrorResponse => Object.prototype.hasOwnProperty.call(res, 'message');
