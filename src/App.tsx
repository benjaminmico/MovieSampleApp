/**
 * MovieSampleApp
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import BottomTab from './components/BottomTab';
import HomeScreen from './screens/HomeScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import WishlistScreen from './screens/WishlistScreen';
import withProviders from './withProviders';

type TabParams = {
  Home: undefined;
  Wishlist: undefined;
};

type StackParams = {
  Tab: TabParams;
  MovieDetails: undefined;
};

const Tab = createBottomTabNavigator<TabParams>();

const Stack = createStackNavigator<StackParams>();

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      //@ts-ignore
      tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator initialRouteName="Tab">
        <Stack.Screen
          name="Tab"
          component={TabStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withProviders(App);
