import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {shallowEqual, useSelector} from 'react-redux';
import {IStoreState} from '../../../store/types';
import styles from './index.style';

interface IProps {
  isFocused: boolean;
  iconName: string;
  label: string;
  testID?: string;
  onPress: () => void;
  onLongPress?: () => void;
}
/** Bottom Bar Item to display on BottomBar, composed of :
 *  - icon : from MaterialIcons
 *  - label
 * Handled focused status passed as props from parent component
 */
const BottomBarItem = ({
  isFocused,
  iconName,
  label,
  testID,
  onPress,
  onLongPress,
}: IProps) => {
  return (
    <>
      <TouchableOpacity
        accessibilityRole="button"
        activeOpacity={label === 'Home' ? 0 : 1}
        disabled={label === 'Home'}
        accessibilityState={isFocused ? {selected: true} : {}}
        testID={testID}
        onPress={onPress}
        onLongPress={onLongPress}
        style={styles.iconContainer(label === 'Home')}>
        <Icon
          testID={label || 'bottomTabBarIcon'}
          name={iconName}
          size={30}
          color={isFocused ? 'white' : 'grey'}
        />
        <Text testID="bottomTabBarLabel" style={styles.tabLabel(isFocused)}>
          {label}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default BottomBarItem;
