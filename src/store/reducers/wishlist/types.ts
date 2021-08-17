import {IMovie, IMovieListItem} from './../../../types/movies';
export interface IWishlistReducerState {
  wishlist: (IMovie | IMovieListItem)[];
}
