import {IMovieListItem, IMovie} from './../../types/movies';
import {MOVIES_POPULATE, MOVIES_SET_CURRENT, MOVIES_LOADING, MOVIES_ERROR} from '../constants';

export interface StoreMoviesActionLoading {
  type: typeof MOVIES_LOADING;
  loading: boolean;
}

export interface StoreMoviesActionError {
  type: typeof MOVIES_ERROR;
  error: boolean;
}

export interface StoreMoviesActionPopulate {
  type: typeof MOVIES_POPULATE;
  data: IMovieListItem[];
}

export interface StoreMoviesActionSetCurrent {
  type: typeof MOVIES_SET_CURRENT;
  setCurrentMovie: IMovie;
}

export const actionMoviesLoading = (
  loading: boolean,
): StoreMoviesActionLoading => {
  return {
    type: MOVIES_LOADING,
    loading,
  };
};

export const actionMoviesError = (error: boolean): StoreMoviesActionError => {
  return {
    type: MOVIES_ERROR,
    error,
  };
};

export const actionMoviesPopulate = (): StoreMoviesActionPopulate => {

  /** API ROUTES TO FETCH MOVIES */

  return {
    type: MOVIES_ERROR,
    data:,
  };
};

export const actionMoviesCurrentMovie = (): StoreMoviesActionSetCurrent => {

  /** API ROUTES TO FETCH CURRENT MOVIE & MOVIE CAST + CREW  */

  return {
    type: MOVIES_SET_CURRENT,
    currentMovie:,
  };
};
