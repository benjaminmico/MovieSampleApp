import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import BottomTabBarItem from './index';

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'Icon');

describe('Integrity tests', () => {
  test('renders BottomTabBarIcon with the right label', async () => {
    const onPress = jest.fn();
    const onLongPress = jest.fn();
    const label = 'Wishlist';

    const {getByTestId} = render(
      <BottomTabBarItem
        label={label}
        isFocused={true}
        testID={'bottomTabBarItem'}
        iconName={'heart'}
        onPress={onPress}
        onLongPress={onLongPress}
      />,
    );

    const bottomTabBarItem = getByTestId('bottomTabBarItem');
    fireEvent.press(bottomTabBarItem);
    expect(onPress).toHaveBeenCalled();

    const bottomTabBarLabel = getByTestId('bottomTabBarLabel');

    expect(bottomTabBarLabel.props.children).toBe('Wishlist');
  });
});

describe('Props tests', () => {
  test('renders focused tab', async () => {
    const onPress = jest.fn();
    const onLongPress = jest.fn();
    const label = 'Wishlist';

    const component = render(
      <BottomTabBarItem
        label={label}
        isFocused={true}
        testID={'bottomTabBarItem'}
        iconName={'wishlist'}
        onPress={onPress}
        onLongPress={onLongPress}
      />,
    );

    // label should be focused
    const textComponent = component.getByTestId('bottomTabBarLabel');
    expect(textComponent.props.style).toMatchObject({color: 'black'});

    // icon color should be focused
    const iconComponent = component.getByTestId('Wishlist');
    expect(iconComponent.props.color).toEqual('black');
  });

  test('renders unfocused tab', async () => {
    const onPress = jest.fn();
    const onLongPress = jest.fn();
    const label = 'Wishlist';

    const component = render(
      <BottomTabBarItem
        label={label}
        isFocused={false}
        testID={'bottomTabBarItem'}
        iconName={'wishlist'}
        onPress={onPress}
        onLongPress={onLongPress}
      />,
    );

    // label should be focused
    const textComponent = component.getByTestId('bottomTabBarLabel');
    expect(textComponent.props.style).toMatchObject({
      color: 'rgba(0, 0, 0, 0.27)',
    });

    // icon color should be focused
    const iconComponent = component.getByTestId('Wishlist');
    expect(iconComponent.props.color).toEqual('rgba(0, 0, 0, 0.27)');
  });
});
