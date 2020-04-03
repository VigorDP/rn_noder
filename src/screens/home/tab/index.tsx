import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';

import MainScreen from './main/MainScreen';
import MyScreen from './my/MyScreen';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName = route.name === 'Home' ? 'home' : 'user';
          return (
            <Icon
              name={iconName}
              type="FontAwesome"
              style={{opacity: focused ? 1 : 0.8}}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: '主页',
        }}
        name="Home"
        component={MainScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '我的',
        }}
        name="My"
        component={MyScreen}
      />
    </Tab.Navigator>
  );
}

export default HomeScreen;
