import * as React from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Icon,
  Body,
  Title,
  Text,
  Right,
} from 'native-base';
import {StyleSheet} from 'react-native';
function RegisterScreen(props: any) {
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
          <Title>注册</Title>
        </Body>
        <Right />
      </Header>
      <Content contentContainerStyle={styles.container}>
        <Text>暂不支持</Text>
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
});
export default RegisterScreen;
