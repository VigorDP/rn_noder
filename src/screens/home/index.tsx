import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabScreen from './tab';
import DetailScreen from './detail/DetailScreen';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Tab" component={TabScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default HomeScreen;
