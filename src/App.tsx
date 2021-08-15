/**
 * MovieSampleApp
 */

import React, {useEffect} from 'react';
import {View} from 'react-native';
import getMovies from './api/getMovies';
import getMovieDetails from './api/getMovieDetails';
import getMovieCredits from './api/getMovieCredits';
import withProviders from './withProviders';

// const Stack = createStackNavigator();

const App: React.FC = () => {
  async function loadMovies() {
    const movies = await getMovies();
    console.log('movies', movies);
    const movieDetails = await getMovieDetails(436969);
    console.log('movieDetails', movieDetails);
    const movieCredits = await getMovieCredits(436969);
    console.log('movieCredits', movieCredits);
  }

  useEffect(() => {
    loadMovies();
  }, []);
  return <View />;
};

export default withProviders(App);
