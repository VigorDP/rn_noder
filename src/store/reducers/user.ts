import {handleActions} from 'redux-actions';
import {UpdateUserInfoAction, LoginAction} from '../actions';
import Immutable from 'immutable';

const defaultMap = Immutable.Map({
  token: '',
  id: '',
  loginname: '',
  avatar_url: '',
});

export const user = handleActions(
  {
    [UpdateUserInfoAction.toString()](state, data) {
      return state.set('token', data.payload);
    },
    [LoginAction.toString()](state, data) {
      const {id, loginname, avatar_url} = data.payload;
      return state
        .set('id', id)
        .set('loginname', loginname)
        .set('avatar_url', avatar_url);
    },
  },
  defaultMap,
);
