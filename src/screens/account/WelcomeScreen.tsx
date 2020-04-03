import * as React from 'react';
import {View, Image, StyleSheet, Alert} from 'react-native';
import {Button, Text, Icon} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Imgs from 'assets/imgs';

function WelcomeScreen(props: any) {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>欢迎使用</Text>
      <Image resizeMode="contain" style={styles.img} source={Imgs.logoRound} />
      <View style={styles.buttonGroup}>
        <Button
          block
          success
          style={styles.button}
          onPress={() => Alert.alert('开发中...')}>
          <Icon name="wechat" type="AntDesign" />
          <Text style={styles.wechatText}>使用微信账号登录</Text>
        </Button>
        <Button
          block
          dark
          style={styles.button}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.loginText}>账号登录</Text>
        </Button>
        <Button
          block
          success
          transparent
          onPress={() => props.navigation.navigate('RegisterScreen')}>
          <Text style={styles.registerText}>注册CNode</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 100,
  },
  title: {fontSize: 28, fontWeight: 'bold', letterSpacing: 2},
  img: {width: '60%', flex: 2},
  buttonGroup: {width: '80%', flex: 1},
  button: {marginBottom: 10},
  wechatText: {
    color: 'white',
    letterSpacing: 1,
    fontWeight: 'bold',
    marginLeft: -20,
  },
  loginText: {color: 'white', letterSpacing: 1, fontWeight: 'bold'},
  registerText: {color: 'black', fontWeight: 'bold'},
});

export default WelcomeScreen;
