import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionType } from './action-types';
import { Action } from './actions';
import { api } from '../api';

export const getFirstname = createAsyncThunk('user/firstname', async () => {
  return api('GET', 'firstname');
});

export const getFriendId = createAsyncThunk('user/friendid', async () => {
  return api('GET', 'getFriendId');
});

export interface initialState {
  firstname?: String;
  lastname?: String;
  username?: String;
  friendid?: String;
}

export const initialState: initialState = {
  firstname: '',
  lastname: '',
  username: '',
  friendid: '',
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    SetFirstName(state, action: PayloadAction<String>) {
      state.firstname = action.payload;
    },
    RemoveFriendID(state) {
      state.friendid = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getFirstname.fulfilled, (state, { payload }) => {
        state.firstname = payload.data;
      })
      .addCase(getFriendId.fulfilled, (state, { payload }) => {
        state.friendid = payload.data;
      });
  },
});

export const { SetFirstName, RemoveFriendID } = userSlice.actions;

export default userSlice.reducer;

// export const UserReducer = (state = UserData, action: Action) => {
//   switch (action.type) {
//     case ActionType.USERDATA:
//       return action.payload;
//     default:
//       return state;
//   }
// };
