import * as React from 'react';
import {connect} from 'react-redux';
import * as A from 'store/actions';
import {Topic} from 'components';
import {
  Container,
  Header,
  Tabs,
  Tab,
  Left,
  Body,
  Title,
  Right,
} from 'native-base';
import {StyleSheet} from 'react-native';

const TopicAllComponent = Topic({tab: 'all', title: '全部'});
const TopicGoodComponent = Topic({tab: 'good', title: '精华'});
const TopicShareComponent = Topic({tab: 'share', title: '分享'});
const TopicAskComponent = Topic({tab: 'ask', title: '问答'});
const TopicJobComponent = Topic({tab: 'job', title: '问答'});

function MainScreen(props: any) {
  return (
    <Container>
      <Header transparent style={{marginTop: -20}}>
        <Left />
        <Body>
          <Title>CNode 社区</Title>
        </Body>
        <Right />
      </Header>
      <Tabs tabBarUnderlineStyle={styles.tabBarUnderlineStyle}>
        <Tab
          heading="全部"
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}>
          <TopicAllComponent {...props} />
        </Tab>
        <Tab
          heading="精华"
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}>
          <TopicGoodComponent {...props} />
        </Tab>
        <Tab
          heading="分享"
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}>
          <TopicShareComponent {...props} />
        </Tab>
        <Tab
          heading="问答"
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}>
          <TopicAskComponent {...props} />
        </Tab>
        <Tab
          heading="招聘"
          textStyle={styles.textStyle}
          activeTextStyle={styles.activeTextStyle}>
          <TopicJobComponent {...props} />
        </Tab>
      </Tabs>
    </Container>
  );
}

const styles = StyleSheet.create({
  tabBarUnderlineStyle: {backgroundColor: 'black', height: 2},
  textStyle: {
    color: 'gray',
    fontSize: 14,
  },
  activeTextStyle: {
    color: 'black',
    fontSize: 16,
  },
});

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
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
