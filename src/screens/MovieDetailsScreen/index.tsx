import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {
  actionWishlistAdd,
  actionWishlistRemove,
} from '../../store/actions/wishlist';
import {IStoreState} from '../../store/types';
import {THEMOVIEDB_URL_IMAGE_PREFIX} from '../../utils/urls';
import styles from './index.style';

/**
 * MovieDetailsScreen
 */
const MovieDetailsScreen: React.FC = () => {
  const {goBack} = useNavigation();

  const insets = useSafeAreaInsets();

  const dispatch = useDispatch();

  const {
    movies: {currentMovie, loading},
    wishlist: {wishlist},
  } = useSelector(
    (state: IStoreState) => ({
      movies: state.movies,
      wishlist: state.wishlist,
    }),
    shallowEqual,
  );

  /** Add or remove on wishlist */
  const wishlistHandler = () => {
    if (currentMovie?.id) {
      if (wishlist.find(movie => movie.id === currentMovie.id)) {
        dispatch(actionWishlistRemove(currentMovie.id));
      } else {
        dispatch(actionWishlistAdd(currentMovie));
      }
    }
  };

  return (
    <View style={styles.container}>
      <Icon
        name={'keyboard-backspace'}
        size={30}
        onPress={goBack}
        color={'white'}
        style={styles.backIcon(insets.top)}
      />
      <View style={styles.headerContainerItem}>
        {!!currentMovie?.id && (
          <Image
            style={styles.imageHeader}
            source={{
              uri: `${THEMOVIEDB_URL_IMAGE_PREFIX}${currentMovie.backdrop_path}`,
            }}
          />
        )}
        <LinearGradient
          colors={['black', '#00000033', '#00000033']}
          start={{x: 0, y: 0.05}}
          end={{x: 0, y: 1}}
          style={styles.linearGradientContainer}
        />
      </View>
      <View style={styles.contentContainer}>
        <>
          {loading ? (
            <ActivityIndicator size="large" color="#FFFFFF" />
          ) : (
            <>
              {currentMovie?.original_title && (
                <Text style={styles.headerTitle}>
                  {currentMovie.original_title}
                </Text>
              )}

              {!!currentMovie?.crew.find(
                person => person.job === 'Director',
              ) && (
                <Text style={styles.directorSubTitle}>{`Directed by : ${
                  currentMovie?.crew.find(person => person.job === 'Director')
                    ?.name
                }`}</Text>
              )}
              {!!currentMovie?.overview && (
                <Text style={styles.synopsisTitle}>
                  {currentMovie.overview}
                </Text>
              )}

              <Icon
                name="heart"
                size={30}
                onPress={wishlistHandler}
                color={
                  currentMovie?.id &&
                  wishlist.find(movie => movie.id === currentMovie.id)
                    ? 'red'
                    : 'rgba(255,255,255,0.4)'
                }
                style={styles.iconContainer}
              />
            </>
          )}
        </>
      </View>
    </View>
  );
};

export default MovieDetailsScreen;
