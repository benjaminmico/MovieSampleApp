import React, {memo, useRef} from 'react';
import {useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {
  actionMoviesCurrentMovie,
  actionMoviesPopulate,
} from '../../store/actions/movies';
import {IStoreState} from '../../store/types';
import {IMovieListItem} from '../../types/movies';
import {THEMOVIEDB_URL_IMAGE_PREFIX} from '../../utils/urls';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'react-native';
import styles from './index.style';
import {useNavigation} from '@react-navigation/native';

/**
 * Home screen of the app, displays :
 * - A slider movies at the top of screen
 * - Some movies suggestions
 */
const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  const {navigate} = useNavigation();

  const {
    movies: {data, loading},
  } = useSelector(
    (state: IStoreState) => ({
      movies: state.movies,
    }),
    shallowEqual,
  );

  const carouselRef = useRef(null);

  const {width: dimensionsWidth} = Dimensions.get('window');

  /** Load Movie and add them to store */
  useEffect(() => {
    dispatch(actionMoviesPopulate());
  }, [dispatch]);

  /** Render header item */
  const renderHeaderItem = ({
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
        style={styles.headerContainerItem}>
        <Image
          style={styles.imageHeader}
          source={{
            uri: `${THEMOVIEDB_URL_IMAGE_PREFIX}${item.backdrop_path}`,
          }}
        />
        <LinearGradient
          colors={['black', '#00000033', '#00000033']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          style={styles.linearGradientContainer}
        />
        <Text style={styles.headerTitle}>{item.original_title}</Text>
      </TouchableOpacity>
    );
  };

  /** On press movie  :
   * - add as current movie
   * - navigate to movie details screen
   */
  const onPressMovie = (item: IMovieListItem) => {
    if (item?.id) {
      dispatch(actionMoviesCurrentMovie(item.id));
      navigate('MovieDetails', {movie: item});
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
    <View style={styles.container}>
      <View>
        <Carousel
          layout={'default'}
          ref={carouselRef}
          data={data}
          autoplay
          autoplayInterval={5000}
          loop
          renderItem={renderHeaderItem}
          sliderWidth={dimensionsWidth}
          itemWidth={dimensionsWidth - 0}
        />
        <View style={styles.sectionsContainer}>
          <Text style={styles.sectionTitle}>Box-office</Text>
          <FlatList
            data={data.slice(0, 5)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderListItem}
            keyExtractor={(item: IMovieListItem) => `${item.id}`}
          />
        </View>
        {}
      </View>
    </View>
  );
};

export default memo(HomeScreen);
