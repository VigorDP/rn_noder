import {enableScreens} from 'react-native-screens';
import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, SignInScreen} from './screens';
import {Alert} from 'react-native';
import {Provider} from 'react-redux';
import getStore from './store/getStore';

enableScreens();

const Stack = createStackNavigator();

function App(props: any) {
  const store = getStore();

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    Alert.alert(props);
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
      actions.app.handleAccount({type: 'RESTORE_TOKEN', token: userToken});
    };
    bootstrapAsync();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* {props.state.userToken === null ? (
          <Stack.Screen name="SignIn" component={SignInScreen} />
        ) : ( */}
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* )} */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const mapStateToProps = (state) => {
  return {
    $list: state.getIn(['topic', tab]),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTopicByTabNameAction: ({page}) =>
      dispatch(getTopicByTabNameAction({page, tab})),
    clearTopicAction: ({tab}) => dispatch(clearTopicAction({tab})),
  };
};

return connect(mapStateToProps, mapDispatchToProps)(HOC);
