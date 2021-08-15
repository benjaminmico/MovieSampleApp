/**
 * MovieSampleApp
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return <SafeAreaView></SafeAreaView>;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
