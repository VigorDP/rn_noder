import {enableScreens} from 'react-native-screens';
import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, AccountScreen} from 'screens/index';
import {Provider} from 'react-redux';
import getStore from 'store/getStore';

enableScreens();

const Stack = createStackNavigator();

export default function App() {
  const store = getStore();
  console.log(store.getState().get('userToken'));

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken: string | null = null;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      store.dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };
    bootstrapAsync();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {store.getState().get('userToken') ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <Stack.Screen name="Account" component={AccountScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
