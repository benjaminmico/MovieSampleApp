import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

/** Preset a rest api call function with TheMovieDB api token
 * TODO : add api_key on encrypted storage
 */
const rest = async (request: AxiosRequestConfig): Promise<AxiosResponse> => {
  return await axios({
    ...request,
    params: {...request.params, api_key: '55855f56e5cc6a0ed270d124c95e6ee7'},
  });
};

export default rest;
