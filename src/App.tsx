/**
 * MovieSampleApp
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Messages">
          <Stack.Screen
            name="Messages"
            component={MessagesScreen}
            options={{
              headerShown: true,
              title: 'Messages',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
