import * as React from 'react';
import {View, Button} from 'react-native';

function WelcomeScreen() {
  return (
    <View>
      <Button title="Welcome" onPress={() => console.log('Welcome')} />
    </View>
  );
}

export default WelcomeScreen;
