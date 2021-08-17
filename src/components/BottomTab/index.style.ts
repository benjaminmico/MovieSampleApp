import {TextStyle, ViewStyle} from 'react-native';

interface IStyles {
  safeAreaContainer: ViewStyle;
  container: ViewStyle;
  contentContainer: ViewStyle;
  widgetContainer: ViewStyle;
  homeContainer: ViewStyle;
  homeIcon: ViewStyle;
  iconContainer: ViewStyle;
  tabLabel: TextStyle;
  wishlistCounterContainer: ViewStyle;
  wishlistCounterText: TextStyle;
}

const styles: IStyles = {
  safeAreaContainer: {
    backgroundColor: '#262625',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    alignItems: 'center',
    backgroundColor: '#262625',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#262625',
    height: 60,
    width: '100%',
    alignItems: 'center',
  },

  homeContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  widgetContainer: {
    position: 'absolute',
    top: 0,
    left: '60%',
    bottom: 0,
    right: 0,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  homeIcon: {
    height: 60,
    width: 60,
    zIndex: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    width: 10,
    opacity: 1.0,
  },
  tabLabel: {
    fontSize: 12,
    color: 'white',
    marginTop: 3,
  },
  wishlistCounterContainer: {
    position: 'absolute',
    width: 17,
    height: 17,
    right: -5,
    top: -3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 20,
  },
  wishlistCounterText: {
    color: 'white',
    fontSize: 12,
  },
};

export default styles;
