import {ViewStyle, TextStyle} from 'react-native';

interface IStyles {
  iconContainer: (arg1: boolean) => ViewStyle;
  tabLabel: (arg1: boolean) => TextStyle;
}

const styles: IStyles = {
  iconContainer: visible => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    width: 10,
    opacity: visible ? 0.0 : 1.0,
    backgroundColor: visible ? 'transparent' : 'transparent',
  }),
  tabLabel: isFocused => ({
    fontSize: 12,
    color: isFocused ? 'transparent' : 'transparent',
    marginTop: 3,
  }),
};

export default styles;
