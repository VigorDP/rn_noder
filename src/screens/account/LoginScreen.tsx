import * as React from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Left,
  Icon,
  Body,
  Title,
  Right,
  Form,
  Item,
  Label,
  Input,
  Toast,
} from 'native-base';
import {StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';
import * as A from 'store/actions';

function LoginScreen(props: any) {
  const [username, setUsername] = React.useState(
    'd2726e8f-7dc2-4ae8-a4ca-45e74fc3494e',
  );
  const [password, setPassword] = React.useState('');

  return (
    <Container>
      <Header transparent>
        <Left>
          <Button
            transparent
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Icon name="arrow-back" style={styles.arrow} />
          </Button>
        </Left>
        <Body>
          <Title>登录</Title>
        </Body>
        <Right />
      </Header>
      <Content contentContainerStyle={styles.container}>
        <Form style={styles.form}>
          <Item
            stackedLabel
            success={username ? true : false}
            error={username ? false : true}>
            <Label>用户token</Label>
            <Input
              autoFocus
              clearButtonMode="while-editing"
              enablesReturnKeyAutomatically
              returnKeyType="next"
              value={username}
              onChangeText={(value) => setUsername(value)}
            />
          </Item>
          <Item
            stackedLabel
            success={password ? true : false}
            error={password ? false : true}>
            <Label>密码</Label>
            <Input
              secureTextEntry
              clearButtonMode="while-editing"
              enablesReturnKeyAutomatically
              returnKeyType="done"
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
          </Item>
          <Button
            block
            dark
            style={styles.button}
            disabled={username && password ? false : true}
            onPress={async () => {
              try {
                const {
                  payload: {success, error_msg},
                } = await props.login(username);
                console.log('suc', success, error_msg);
                success
                  ? (props.updateUserInfo(username),
                    AsyncStorage.setItem('token', username))
                  : Toast.show({text: error_msg});
              } catch (e) {
                console.log('aa', e.message);
              }
            }}>
            <Text>登录</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: '20%',
  },
  arrow: {color: 'black', paddingLeft: 4},
  form: {
    width: '80%',
    paddingLeft: 0,
  },
  button: {
    marginTop: 30,
    fontWeight: 'bold',
  },
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateUserInfo: (token: string) => {
      dispatch(A.UpdateUserInfoAction(token));
    },
    login: (token: string) => {
      return dispatch(A.LoginAction(token));
    },
  };
};

export default connect(null, mapDispatchToProps)(LoginScreen);
