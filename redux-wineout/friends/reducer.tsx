import { createSlice } from '@reduxjs/toolkit';
import { apiParams, api } from '../api';
import { FriendState } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState: FriendState = {};

export const checkFriendRequests = createAsyncThunk(
  'friends/request',
  async () => {
    return api('GET', 'checkFriendRequests', null);
  }
);

export const getFriends = createAsyncThunk('friends/getfriends', async () => {
  return api('GET', 'getFriend', null);
});

export const friendSlice = createSlice({
  name: 'friendSlice',
  initialState,
  reducers: {
    getstate(state, action) {
      state.FriendList;
    },
    acceptFriend(state, action) {
      acceptRequest(action.payload);
    },
    sendFriendRequest(state, action) {
      FriendRequest(action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(checkFriendRequests.fulfilled, (state, { payload }) => {
        state.FriendRequest = payload.data;
      })
      .addCase(getFriends.fulfilled, (state, { payload }) => {
        state.FriendList = payload.data;
      });
  },
});

export const { getstate, acceptFriend, sendFriendRequest } =
  friendSlice.actions;

const acceptRequest = (username: String) => {
  apiParams('GET', 'acceptfriendrequest', username);
};

const FriendRequest = (friendId: String) => {
  apiParams('GET', 'sendfriendrequest', friendId);
};

export default friendSlice.reducer;
