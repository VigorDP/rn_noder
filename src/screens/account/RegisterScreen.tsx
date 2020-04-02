import * as React from 'react';
import {View, Button} from 'react-native';

function RegisterScreen() {
  return (
    <View>
      <Button title="Register" onPress={() => console.log('Register')} />
    </View>
  );
}

export default RegisterScreen;
