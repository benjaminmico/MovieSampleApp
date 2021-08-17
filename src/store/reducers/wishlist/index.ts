import {IMovie, IMovieListItem} from './../../../types/movies';
import {createReducer} from '../../utils/reducerFactory';
import {
  StoreWishlistActionAdd,
  StoreWishlistActionRemove,
} from './../../actions/wishlist';
import {WISHLIST_ADD, WISHLIST_REMOVE} from './../../constants';
import {IWishlistReducerState} from './types';

export {defaultState as DEFAULT_MOVIES_REDUCER};

/* Default state */
const defaultState: IWishlistReducerState = {
  wishlist: [],
};

/* Wishlist add movie */
const wishlistAdd = (
  state: IWishlistReducerState,
  action: StoreWishlistActionAdd,
): IWishlistReducerState => {
  return {
    ...state,
    wishlist: [...state.wishlist, action.movie],
  };
};

/* Wishlist remove movie */
const wishlistRemove = (
  state: IWishlistReducerState,
  action: StoreWishlistActionRemove,
): IWishlistReducerState => {
  return {
    ...state,
    wishlist: [...state.wishlist].filter(
      (movie: IMovie | IMovieListItem) => movie.id !== action.movieId,
    ),
  };
};

const strategies = {
  /* Add */
  [WISHLIST_ADD]: wishlistAdd,
  /* Remove */
  [WISHLIST_REMOVE]: wishlistRemove,
  /* Default */
  __default__: (state: IWishlistReducerState) => state,
};

type TypeOfStrategies = typeof strategies;

const wishlistReducer = createReducer<TypeOfStrategies, IWishlistReducerState>(
  strategies,
  defaultState,
);

export default wishlistReducer;
