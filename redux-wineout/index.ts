import { combineReducers } from 'redux';
import User from '@/redux/User/reducer';
import Diary from './diary/reducer';
import Friend from './friends/reducer';

const reducers = combineReducers({
  user: User,
  wine: Diary,
  friend: Friend,
});

export default reducers;
export type State = ReturnType<typeof reducers>;
