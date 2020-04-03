import {enableScreens} from 'react-native-screens';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';
import {Root} from 'native-base';
import {HomeScreen, AccountScreen} from 'screens/index';
import getStore from 'store/getStore';
import {UpdateUserInfoAction} from 'store/actions';
import 'utils/disableYellowBox';
enableScreens();

const Stack = createStackNavigator();

export default function App() {
  const store = getStore();
  const [token, setToken] = React.useState('');

  React.useEffect(() => {
    const bootstrap = async () => {
      const userToken = await AsyncStorage.getItem('token');
      store.dispatch(UpdateUserInfoAction(userToken));
      SplashScreen.hide();
    };
    bootstrap();
    return store.subscribe(() => {
      setToken(store.getState().getIn(['user', 'token']));
    });
  }, [token, store]);
  return (
    <Root>
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
    </Root>
  );
}
