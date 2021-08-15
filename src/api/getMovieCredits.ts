import {ICast, ICrew} from './../types/movies';
import {THEMOVIEDB_URL_PREFIX} from '../utils/urls';
import rest from '../utils/rest';

const getMovieCredits = async (
  movieId: number,
): Promise<
  | {
      data: {cast: ICast; crew: ICrew} | null;
      error: boolean | string;
    }
  | undefined
> => {
  try {
    const res = await rest({
      method: 'GET',
      url: `${THEMOVIEDB_URL_PREFIX}movie/${movieId}/credits`,
    });

    return {data: {cast: res.data.cast, crew: res.data.crew}, error: false};
  } catch (e) {
    return {data: null, error: JSON.stringify(e)};
  }
};

export default getMovieCredits;
