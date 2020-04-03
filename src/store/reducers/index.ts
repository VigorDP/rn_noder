import {
  combineReducers, // 将顶层 state 改造为 immutable 对象
} from 'redux-immutable';
import {topic} from './topic';
import {user} from './user';

const rootReducer = combineReducers({
  topic,
  user,
});

export default rootReducer;
