import getMovieCredits from '../../api/getMovieCredits';
import getMovieDetails from '../../api/getMovieDetails';
import getMovies from '../../api/getMovies';
import {IMovieListItem, IMovie} from '../../types/movies';
import {
  MOVIES_POPULATE,
  MOVIES_SET_CURRENT,
  MOVIES_LOADING,
  MOVIES_ERROR,
} from '../constants';

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
  currentMovie: IMovie;
}

export const actionMoviesLoading =
  (loading: boolean) =>
  async (dispatch: (arg0: {type: string; loading: boolean}) => void) => {
    dispatch({
      type: MOVIES_LOADING,
      loading,
    });
  };

export const actionMoviesError = (error: boolean): StoreMoviesActionError => {
  return {
    type: MOVIES_ERROR,
    error,
  };
};

export const actionMoviesPopulate =
  () =>
  async (
    dispatch: (
      arg0: {type: string; data: IMovie} | {type: string; loading: boolean},
    ) => void,
  ) => {
    dispatch({
      type: MOVIES_LOADING,
      loading: true,
    });
    const movies = await getMovies();

    if (movies?.data) {
      dispatch({type: MOVIES_POPULATE, data: movies.data});
    }
    dispatch({
      type: MOVIES_LOADING,
      loading: false,
    });
  };

export const actionMoviesCurrentMovie =
  (id: number) =>
  async (
    dispatch: (
      arg0:
        | {type: string; currentMovie: IMovie}
        | {type: string; loading: boolean},
    ) => void,
  ) => {
    dispatch({
      type: MOVIES_SET_CURRENT,
      currentMovie: null,
    });
    dispatch({
      type: MOVIES_LOADING,
      loading: true,
    });

    const movieDetails = await getMovieDetails(id);

    const movieCredits = await getMovieCredits(id);

    if (movieDetails?.data && movieCredits?.data) {
      dispatch({
        type: MOVIES_SET_CURRENT,
        currentMovie: {...movieDetails?.data, ...movieCredits?.data},
      });
    }
    dispatch({
      type: MOVIES_LOADING,
      loading: false,
    });
  };
