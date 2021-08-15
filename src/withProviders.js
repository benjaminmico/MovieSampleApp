import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './store';
/**
 * With providers function to keep providers on external HOC
 */
const withProviders = (Component: React.FC) => (props: any) =>
  (
    <>
      <SafeAreaProvider>
        <ReduxProvider store={store}>
          <Component {...props} />
        </ReduxProvider>
      </SafeAreaProvider>
    </>
  );

export default withProviders;
