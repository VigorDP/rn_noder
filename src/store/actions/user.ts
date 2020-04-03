import {createAction} from 'redux-actions';
import * as Type from '../actionType';

export const UpdateUserInfoAction = createAction(
  Type.UPDATE_USER_INFO,
  (args: any) => args,
);
