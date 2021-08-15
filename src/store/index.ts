import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import logger from 'redux-logger';
import {
  createMigrate,
  MigrationManifest,
  persistReducer,
  persistStore,
} from 'redux-persist';
import thunk from 'redux-thunk';
import {movies, wishlist} from './reducers';
import {IStoreState} from './types';

const rootReducer = combineReducers({
  movies,
  wishlist,
});

const migrations: MigrationManifest = {
  1: (state: IStoreState) => {
    // migration to keep only device state
    return {
      movies: state.movies,
      wishlist: state.wishlist,
    };
  },
};

/** Store persist config & versioning */
const persistConfig = {
  key: 'root',
  version: 4,
  storage: AsyncStorage,
  migrate: createMigrate(migrations, {debug: false}),
};

/** Init persist reducer */
const persistedReducer = persistReducer(persistConfig, rootReducer);

let middleware: any = [thunk];

console.log('__DEV__', __DEV__);

if (__DEV__) {
  middleware = [...middleware, logger];
}

/** Create store */
const store = createStore(
  persistedReducer,
  compose(applyMiddleware(...middleware)),
);

/** Create persistor */
const persistor = persistStore(store);

export {store, persistor};
