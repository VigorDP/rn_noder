import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import Immutable, {is} from 'immutable';
import * as Images from 'assets/imgs';
import {
  Text,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Button,
  Icon,
  Right,
} from 'native-base';
import dayjs from 'dayjs';

interface Props {
  item: any;
  onPressed: (content: string, title: string) => void;
}

export class ListItem extends Component {
  shouldComponentUpdate(nextProps: Props): boolean {
    const thisPropsItem = Immutable.fromJS(this.props.item);
    const nextPropsItem = Immutable.fromJS(nextProps.item);

    if (is(thisPropsItem, nextPropsItem)) {
      return false;
    }
    return true;
  }
  render() {
    const props = this.props;
    const itemData = props.item;
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: itemData.author.avatarUrl}} />
            <Body>
              <Text>{itemData.author.loginName}</Text>
              <Text note>{dayjs(itemData.createdAt).format('YYYY-MM-DD')}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody button onPress={() => props.onPressed(itemData.id)}>
          <Text style={styles.title}>{itemData.title}</Text>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent style={styles.button}>
              <Icon
                active
                name="eye"
                type="FontAwesome"
                style={styles.colorBlack}
              />
              <Text style={styles.colorBlack}>{itemData.visitCount}</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent style={styles.button}>
              <Icon
                name="comment"
                type="FontAwesome"
                style={styles.colorBlack}
              />
              <Text style={styles.colorBlack}>{itemData.replyCount}</Text>
            </Button>
          </Body>
          <Right>
            <Text style={styles.colorBlack}>
              {dayjs(itemData.lastRepliedAt).format('YYYY-MM-DD')}
            </Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  title: {paddingLeft: 15, paddingRight: 15},
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorBlack: {color: 'black'},
});
