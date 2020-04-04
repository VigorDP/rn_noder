import * as React from 'react';
import {
  Container,
  Header,
  Button,
  Left,
  Icon,
  Body,
  Title,
  Right,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
} from 'native-base';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import {WebView} from 'react-native-webview';
import getTotalHtml from 'utils/getTotalHtml';
import {connect} from 'react-redux';
import {getTopicDetailAction, clearDetailAction} from 'store/actions';

function DetailScreen(props: any) {
  const id = props.route.params.id;
  React.useEffect(() => {
    props.getTopicDetail(id);
  }, [id]);
  const title = props.detail && props.detail.get('title');
  const content = props.detail && props.detail.get('content');
  const replies = props.detail && props.detail.get('replies');
  const htmlWithWrapper = getTotalHtml(content, title);

  return (
    <Container>
      <Header transparent>
        <Left>
          <Button
            transparent
            onPress={() => {
              props.clearTopicDetail();
              props.navigation.goBack();
            }}>
            <Icon name="arrow-back" style={styles.arrow} />
          </Button>
        </Left>
        <Body>
          <Title>文章详情</Title>
        </Body>
        <Right />
      </Header>
      <WebView
        style={styles.webview}
        source={{html: htmlWithWrapper}}
        renderError={(errorName) => <Title>{errorName}</Title>}
        renderLoading={() => <ActivityIndicator size="small" color="#00ff00" />}
      />
    </Container>
  );
}
const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
  arrow: {color: 'black', paddingLeft: 4},
});

const mapStateToProps = (state, ownProps) => {
  return {
    detail: state.getIn(['topic', 'detail']),
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getTopicDetail: (id) => {
      dispatch(getTopicDetailAction(id));
    },
    clearTopicDetail: () => {
      dispatch(clearDetailAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
