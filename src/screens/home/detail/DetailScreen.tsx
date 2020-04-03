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
  Right,
} from 'native-base';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import getTotalHtml from 'utils/getTotalHtml';

function DetailScreen(props: any) {
  const html = props.route.params.content || '';
  const title = props.route.params.title || 'CNode爱好者';
  const htmlWithWrapper = getTotalHtml(html);
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
          <Title>{title || '详情页'}</Title>
        </Body>
        <Right />
      </Header>
      <WebView
        style={styles.webview}
        source={{html: htmlWithWrapper}}
        renderError={(errorName) => <Title>{errorName}</Title>}
        renderLoading={() => <Title>Loading</Title>}
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
export default DetailScreen;
