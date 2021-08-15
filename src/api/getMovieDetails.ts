import {THEMOVIEDB_URL_PREFIX} from '../utils/urls';
import {IMovieListItem} from '../types/movies';
import rest from '../utils/rest';

const getMovieDetails = async (
  movieId: number,
): Promise<
  | {
      data: IMovieListItem[] | null;
      error: boolean | string;
    }
  | undefined
> => {
  try {
    const res = await rest({
      method: 'GET',
      url: `${THEMOVIEDB_URL_PREFIX}movie/${movieId}`,
    });

    return {data: res.data, error: false};
  } catch (e) {
    return {data: null, error: JSON.stringify(e)};
  }
};

export default getMovieDetails;
