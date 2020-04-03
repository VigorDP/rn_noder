import {enableScreens} from 'react-native-screens';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {HomeScreen, AccountScreen} from 'screens/index';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import getStore from 'store/getStore';
enableScreens();

const Stack = createStackNavigator();

export default function App() {
  const store = getStore();
  const [token, setToken] = React.useState(null);
  React.useEffect(() => {
    SplashScreen.hide();
    return store.subscribe(() => {
      setToken(store.getState().getIn(['user', 'token']));
    });
  }, [token, store]);
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            {token ? (
              <Stack.Screen name="Home" component={HomeScreen} />
            ) : (
              <Stack.Screen name="Account" component={AccountScreen} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
