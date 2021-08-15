import {createReducer} from './../../utils/reducerFactory';
import {
  StoreMoviesActionLoading,
  StoreMoviesActionError,
  StoreMoviesActionPopulate,
  StoreMoviesActionSetCurrent,
} from './../../actions/index';
import {
  MOVIES_LOADING,
  MOVIES_ERROR,
  MOVIES_POPULATE,
  MOVIES_SET_CURRENT,
} from '../../constants';
import {IMoviesReducerState} from './types';

export {defaultState as DEFAULT_MOVIES_REDUCER};

/* Default state */
const defaultState: IMoviesReducerState = {
  loading: false,
  error: false,
  data: null,
  currentMovie: null,
};

/* Movies loading */
const moviesLoading = (
  state: IMoviesReducerState,
  action: StoreMoviesActionLoading,
): IMoviesReducerState => {
  return {
    ...state,
    loading: action.loading,
  };
};

/* Movies error */
const moviesError = (
  state: IMoviesReducerState,
  action: StoreMoviesActionError,
): IMoviesReducerState => {
  return {
    ...state,
    error: action.error,
  };
};

/* Movies populate */
const moviesPopulate = (
  state: IMoviesReducerState,
  action: StoreMoviesActionPopulate,
): IMoviesReducerState => {
  return {
    ...state,
    data: action.data,
  };
};

/* Movies set current */
const moviesSetCurrent = (
  state: IMoviesReducerState,
  action: StoreMoviesActionSetCurrent,
): IMoviesReducerState => {
  return {
    ...state,
    currentMovie: action.currentMovie,
  };
};

const strategies = {
  /* Loading */
  [MOVIES_LOADING]: moviesLoading,
  /* Error */
  [MOVIES_ERROR]: moviesError,
  /* Populate */
  [MOVIES_POPULATE]: moviesPopulate,
  /* Set current */
  [MOVIES_SET_CURRENT]: moviesSetCurrent,
  /* Default */
  __default__: (state: IMoviesReducerState) => state,
};

type TypeOfStrategies = typeof strategies;

const moviesReducer = createReducer<TypeOfStrategies, IMoviesReducerState>(
  strategies,
  defaultState,
);

export default moviesReducer;
