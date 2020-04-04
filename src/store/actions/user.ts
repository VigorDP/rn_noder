import {createAction} from 'redux-actions';
import * as Type from '../actionType';
import {login} from 'api';

export const UpdateUserInfoAction = createAction(
  Type.UPDATE_USER_INFO,
  (args: any) => args,
);

export const LoginAction = createAction(Type.LOGIN, (args: any) => login(args));
