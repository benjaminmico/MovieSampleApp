import {WISHLIST_ADD, WISHLIST_REMOVE} from './../constants';
import {IMovieListItem} from '../../types/movies';

export interface StoreWishlistActionAdd {
  type: typeof WISHLIST_ADD;
  movie: IMovieListItem;
}
export interface StoreWishlistActionRemove {
  type: typeof WISHLIST_REMOVE;
  movieId: number;
}

export const actionWishlistAdd = (
  movie: IMovieListItem,
): StoreWishlistActionAdd => {
  return {
    type: WISHLIST_ADD,
    movie,
  };
};

export const actionWishlistRemove = (
  movie: IMovieListItem,
): StoreWishlistActionAdd => {
  return {
    type: WISHLIST_REMOVE,
    movie,
  };
};
