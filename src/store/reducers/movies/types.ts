import {IMovieListItem, IMovie} from './../../../types/movies';

export interface IMoviesReducerState {
  loading: boolean;
  error: boolean;
  data: IMovieListItem[];
  currentMovie: IMovie | null;
}
