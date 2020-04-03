import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getTopicByTabNameAction, clearTopicAction} from 'store/actions';
import ListContainer from './ListContainer';
import Immutable from 'immutable';

export default function ({tab = 'all', title = '精华'}) {
  class HOC extends PureComponent {
    state = {
      refreshing: true,
    };

    currentPage = 1;

    loadData = async (page: number = 1, isResetCurrentPage) => {
      const result = await this.props.getTopicByTabNameAction({page});
      console.log('result', result);
      const {
        payload: {success},
      } = result;
      if (isResetCurrentPage) {
        this.currentPage = 1;
      }

      if (success) {
        page !== 1 && (this.currentPage = page);
        this.setState({
          refreshing: false,
        });
      } else {
        page !== 1 && (this.currentPage = page - 1);
        this.setState({
          refreshing: false,
        });
      }
    };

    onRefresh = () => {
      this.props.clearTopicAction({tab});
      this.loadData(1, true);
    };

    onEndReached = () => {
      return this.loadData(this.currentPage + 1);
    };

    onItemPressed = (content, title) => {
      return this.props.navigation.navigate('Detail', {content, title});
    };

    componentDidMount = async () => {
      this.loadData(1, true);
    };

    $tempList = Immutable.List();

    componentWillReceiveProps(nextProps: Props): void {
      if (nextProps.$list.size === 0 && this.props.$list.size !== 0) {
        this.$tempList = this.props.$list;
      }
    }

    render() {
      return (
        <ListContainer
          source={
            this.props.$list.size === 0 ? this.$tempList : this.props.$list
          }
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          onEndReached={this.onEndReached}
          onItemPressed={this.onItemPressed}
        />
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      $list: state.getIn(['topic', tab]),
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      getTopicByTabNameAction: ({page}) =>
        dispatch(getTopicByTabNameAction({page, tab})),
      clearTopicAction: ({tab}) => dispatch(clearTopicAction({tab})),
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(HOC);
}
