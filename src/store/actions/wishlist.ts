import {IMovie} from './../../types/movies';
import {WISHLIST_ADD, WISHLIST_REMOVE} from './../constants';
import {IMovieListItem} from '../../types/movies';

export interface StoreWishlistActionAdd {
  type: typeof WISHLIST_ADD;
  movie: IMovie | IMovieListItem;
}
export interface StoreWishlistActionRemove {
  type: typeof WISHLIST_REMOVE;
  movieId: number;
}

export const actionWishlistAdd = (
  movie: IMovie | IMovieListItem,
): StoreWishlistActionAdd => {
  return {
    type: WISHLIST_ADD,
    movie,
  };
};

export const actionWishlistRemove = (
  movieId: number,
): StoreWishlistActionRemove => {
  return {
    type: WISHLIST_REMOVE,
    movieId,
  };
};
