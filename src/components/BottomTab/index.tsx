import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {shallowEqual, useSelector} from 'react-redux';
import {IStoreState} from '../../store/types';
import styles from './index.style';
import type {
  BottomSheetDescriptorMap,
  BottomSheetNavigationHelpers,
  BottomSheetNavigationState,
} from './types';

interface IProps {
  state: BottomSheetNavigationState;
  navigation: BottomSheetNavigationHelpers;
  descriptors: BottomSheetDescriptorMap;
}

/**
 * BottomTab component to display on each Tabs of Bottom Tab Bar
 */
const BottomTab = ({state, navigation, descriptors}: IProps) => {
  const {
    wishlist: {wishlist},
  } = useSelector(
    (state: IStoreState) => ({
      wishlist: state.wishlist,
    }),
    shallowEqual,
  );

  // get focused options
  const focusedOptions: any =
    descriptors[state.routes[state.index].key].options;

  // if tab bar isn't visible return null and don't render anything
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.homeContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.homeIcon}>
            <Text>LcFlix</Text>
          </TouchableOpacity>
        </View>
        <>
          <View style={styles.widgetContainer}>
            <TouchableOpacity
              accessibilityRole="button"
              activeOpacity={1}
              onPress={() => navigation.navigate('Wishlist')}
              style={styles.iconContainer}>
              <View>
                <Icon name="heart" size={30} color={'white'} />
                {!!wishlist?.length && (
                  <View style={styles.wishlistCounterContainer}>
                    <Text style={styles.wishlistCounterText}>
                      {wishlist.length}
                    </Text>
                  </View>
                )}
              </View>
              <Text testID="bottomTabBarLabel" style={styles.tabLabel}>
                Wishlist
              </Text>
            </TouchableOpacity>
          </View>
        </>
      </View>
    </SafeAreaView>
  );
};
export default BottomTab;
