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
} from 'native-base';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import * as A from 'store/actions';

function LoginScreen(props: any) {
  const [username, setUsername] = React.useState('');
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
          <Item stackedLabel>
            <Label>用户token</Label>
            <Input
              autoFocus
              clearButtonMode="while-editing"
              enablesReturnKeyAutomatically
              value={username}
              onChangeText={(value) => setUsername(value)}
            />
          </Item>
          <Item stackedLabel>
            <Label>密码</Label>
            <Input
              secureTextEntry
              clearButtonMode="while-editing"
              enablesReturnKeyAutomatically
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
          </Item>
          <Button
            block
            dark
            style={styles.button}
            disabled={username && password ? false : true}
            onPress={() => props.updateUserInfo(username)}>
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
  };
};

export default connect(null, mapDispatchToProps)(LoginScreen);
