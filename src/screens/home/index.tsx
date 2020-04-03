import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import * as A from 'store/actions';

function HomeScreen(props: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="test"
        onPress={() => {
          props.updateUserInfo('111');
        }}>
        test
      </Button>
      <Button
        title="退出登陆"
        onPress={() => {
          props.updateUserInfo('');
        }}>
        退出登陆
      </Button>
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
