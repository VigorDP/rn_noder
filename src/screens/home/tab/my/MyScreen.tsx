import * as React from 'react';
import {connect} from 'react-redux';
import * as A from 'store/actions';
import {
  Container,
  Header,
  Left,
  Icon,
  Button,
  Title,
  Body,
  Right,
  Thumbnail,
  Text,
  ListItem,
  Switch,
  Toast,
} from 'native-base';
import {View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function MyScreen(props) {
  return (
    <Container style={{backgroundColor: '#eee'}}>
      <Header
        span
        noShadow
        style={{
          borderBottomWidth: 0,
          height: 150,
          paddingLeft: 30,
          paddingRight: 30,
        }}>
        <Body style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Thumbnail source={{uri: props.user.get('avatar_url')}} circular />
          <View style={{marginLeft: 20}}>
            <Text style={{fontSize: 20, color: 'black'}}>
              {props.user.get('loginname')}
            </Text>
            <Text style={{fontSize: 16, color: 'gray', marginTop: 10}} note>
              这家伙什么都没留下
            </Text>
          </View>
        </Body>
      </Header>

      <View style={{marginTop: 30, backgroundColor: 'white'}}>
        <ListItem
          icon
          onPress={() => {
            Toast.show({text: '开发中'});
          }}>
          <Left>
            <Icon name="bookmark" type="FontAwesome" style={{fontSize: 24}} />
          </Left>
          <Body>
            <Text>我的收藏</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>

        <ListItem icon>
          <Left>
            <Icon name="envelope" type="FontAwesome" style={{fontSize: 24}} />
          </Left>
          <Body>
            <Text>我的邮箱</Text>
          </Body>
          <Right>
            <Text>fake@gmail.com</Text>
          </Right>
        </ListItem>

        <ListItem
          icon
          onPress={() => {
            Toast.show({text: '开发中'});
          }}>
          <Left>
            <Icon name="bell" type="FontAwesome" style={{fontSize: 24}} />
          </Left>
          <Body>
            <Text>我的消息</Text>
          </Body>
          <Right>
            <Text>3</Text>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <Body>
          <Button
            style={{marginTop: 50}}
            block
            dark
            onPress={() => {
              props.updateUserInfo(null);
              AsyncStorage.removeItem('token');
            }}>
            <Text>退出登陆</Text>
          </Button>
        </Body>
      </View>
    </Container>
  );
}

const mapStateToProps = (state: any) => {
  return {
    user: state.get('user'),
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
