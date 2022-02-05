import { combineReducers } from 'redux';
import { UserReducer } from '@/redux/User/reducer';

const reducers = combineReducers({
  user: UserReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>;
