import {handleActions} from 'redux-actions';
import {UpdateUserInfoAction} from '../actions';
import Immutable from 'immutable';

const defaultMap = Immutable.Map({
  token: null,
});

export const user = handleActions(
  {
    [UpdateUserInfoAction.toString()](state, data) {
      return state.set('token', data.payload);
    },
  },
  defaultMap,
);
