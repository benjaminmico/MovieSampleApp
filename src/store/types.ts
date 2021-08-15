import {IWishlistReducerState} from './reducers/wishlist/types';
import {IMoviesReducerState} from './reducers/movies/types';

export interface IStoreState {
  movies: IMoviesReducerState;
  wishlist: IWishlistReducerState;
}
