import {ViewStyle, TextStyle, ImageStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
  headerContainerItem: ViewStyle;
  linearGradientContainer: ViewStyle;
  sectionsContainer: ViewStyle;
  imageHeader: ImageStyle;
  imageList: ImageStyle;
  headerTitle: TextStyle;
  sectionTitle: TextStyle;
  emptyWishlistLabel: TextStyle;
  iconContainer: ViewStyle;
  wishlistIcon: ViewStyle;
  listContainerItem: (arg0: number) => ViewStyle;
}

const styles: IStyles = {
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  headerContainerItem: {height: 300},
  linearGradientContainer: {
    position: 'absolute',
    top: 0,
    height: 300,
    width: '100%',
  },
  imageHeader: {flex: 1, resizeMode: 'cover'},
  imageList: {flex: 1, borderRadius: 16},
  headerTitle: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    paddingBottom: 20,
  },
  sectionsContainer: {
    paddingTop: 20,
    paddingLeft: 16,
  },
  listContainerItem: index => ({
    width: 150,
    height: 200,
    paddingLeft: index === 0 ? 0 : 8,
  }),
  wishlistIcon: {
    position: 'absolute',
    right: 5,
    top: 5,
    width: 30,
    height: 30,
    borderRadius: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyWishlistLabel: {
    marginTop: 50,
    color: '#FFFFFF',
    textAlign: 'center',
  },
};

export default styles;
