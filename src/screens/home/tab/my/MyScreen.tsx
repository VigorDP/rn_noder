import * as React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import * as A from 'store/actions';

function MyScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>My Screen</Text>
    </View>
  );
}

const mapStateToProps = (state: any) => {
  return {
    token: state.getIn(['user', 'token']),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateUserInfo: (token: string) => {
      dispatch(A.UpdateUserInfoAction(token));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyScreen);
