import {THEMOVIEDB_URL_PREFIX} from './../utils/urls';
import {IMovie} from '../types/movies';
import rest from '../utils/rest';

const getMovies = async (): Promise<
  | {
      data: IMovie | null;
      error: boolean | string;
    }
  | undefined
> => {
  try {
    const res = await rest({
      method: 'GET',
      url: `${THEMOVIEDB_URL_PREFIX}movie/popular`,
      params: {page: 1},
    });

    return {data: res.data.results, error: false};
  } catch (e) {
    return {data: null, error: JSON.stringify(e)};
  }
};

export default getMovies;
