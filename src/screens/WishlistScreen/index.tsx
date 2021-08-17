import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {actionMoviesCurrentMovie} from '../../store/actions/movies';
import {
  actionWishlistAdd,
  actionWishlistRemove,
} from '../../store/actions/wishlist';
import {IStoreState} from '../../store/types';
import {IMovie, IMovieListItem} from '../../types/movies';
import {THEMOVIEDB_URL_IMAGE_PREFIX} from '../../utils/urls';
import styles from './index.style';

/**
 * Home screen of the app, displays :
 * - A slider movies at the top of screen
 * - Some movies suggestions
 */
const WishlistScreen: React.FC = () => {
  const dispatch = useDispatch();

  const {navigate} = useNavigation();

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

  /** On press movie  :
   * - add as current movie
   * - navigate to movie details screen
   */
  const onPressMovie = (item: IMovieListItem | IMovie) => {
    if (item?.id) {
      dispatch(actionMoviesCurrentMovie(item.id));
      navigate('MovieDetails', {movie: item});
    }
  };

  /** Add or remove on wishlist */
  const wishlistHandler = (item: IMovieListItem | IMovie) => {
    if (currentMovie?.id) {
      if (wishlist.find(movie => movie.id === item.id)) {
        dispatch(actionWishlistRemove(item.id));
      } else {
        dispatch(actionWishlistAdd(item));
      }
    }
  };

  /** Render list item */
  const renderListItem = ({
    item,
    index,
  }: {
    item: IMovieListItem;
    index: number;
  }) => {
    return (
      <TouchableOpacity
        onPress={() => onPressMovie(item)}
        key={`${index}`}
        style={styles.listContainerItem(index)}>
        <Image
          style={styles.imageList}
          source={{
            uri: `${THEMOVIEDB_URL_IMAGE_PREFIX}${item.poster_path}`,
          }}
        />
        <View style={styles.wishlistIcon}>
          <Icon
            name="heart"
            size={20}
            onPress={() => wishlistHandler(item)}
            color={
              currentMovie?.id && wishlist.find(movie => movie.id === item.id)
                ? 'red'
                : 'rgba(255,255,255,0.4)'
            }
            style={styles.iconContainer}
          />
        </View>
      </TouchableOpacity>
    );
  };

  /* Loading */
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.sectionsContainer}>
          <Text style={styles.sectionTitle}>Wishlist</Text>
          {wishlist?.length ? (
            <FlatList
              data={wishlist}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderListItem}
              keyExtractor={(item: IMovieListItem) => `${item.id}`}
            />
          ) : (
            <Text style={styles.emptyWishlistLabel}>
              Go on a movie details & add it to your whishlist!
            </Text>
          )}
        </View>
        {}
      </View>
    </SafeAreaView>
  );
};

export default memo(WishlistScreen);
