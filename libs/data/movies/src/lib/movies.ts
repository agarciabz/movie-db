export interface OmdbResponse {
  search: Movies; // Movies
  totalResults: number;
  response: boolean;
}

export interface OmdbErrorResponse {
  Response: boolean;
  Error: string; // Movie not found!
}

export interface Movie {
  poster: string;
  title: string;
  year: string;
  imdbID: string;
}

export type Movies = Movie[];
