import {ViewStyle, ImageStyle, TextStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
  backIcon: (arg0: number) => ViewStyle;
  headerContainerItem: ViewStyle;
  linearGradientContainer: ViewStyle;
  contentContainer: ViewStyle;
  imageHeader: ImageStyle;
  headerTitle: TextStyle;
  directorSubTitle: TextStyle;
  synopsisTitle: TextStyle;
  iconContainer: ViewStyle;
}

const styles: IStyles = {
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  backIcon: topInset => ({
    position: 'absolute',
    top: 10 + topInset,
    left: 16,
    zIndex: 9,
  }),
  headerContainerItem: {height: 300},
  imageHeader: {flex: 1, resizeMode: 'cover'},
  contentContainer: {
    paddingTop: 16,
    paddingLeft: 16,
  },
  linearGradientContainer: {
    position: 'absolute',
    top: 0,
    height: 300,
    width: '100%',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  directorSubTitle: {
    fontSize: 14,
    color: 'grey',
  },
  synopsisTitle: {
    paddingTop: 20,
    fontSize: 18,
    color: '#FFFFFF',
  },
  iconContainer: {
    marginTop: 20,
  },
};

export default styles;
