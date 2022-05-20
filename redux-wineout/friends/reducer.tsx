import { createSlice } from '@reduxjs/toolkit';
import { apiParams, api } from '../api';
import { FriendState } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState: FriendState = {
  SendRequest: {
    status: '',
  },
};

export const checkFriendRequests = createAsyncThunk(
  'friends/request',
  async () => {
    return api('GET', 'checkFriendRequests', null);
  }
);

export const getFriends = createAsyncThunk('friends/getfriends', async () => {
  return api('GET', 'getFriend', null);
});

export const friendRequest = createAsyncThunk(
  'friends/friendRequest',
  async (friendId: String) => {
    return apiParams('GET', 'sendfriendrequest', { friendid: friendId }).then(
      res => res.status
    );
  }
);

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
    // sendFriendRequest(state, action) {
    //   FriendRequest(action.payload);
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(checkFriendRequests.fulfilled, (state, { payload }) => {
        state.FriendRequest = payload.data;
      })
      .addCase(getFriends.fulfilled, (state, { payload }) => {
        state.FriendList = payload.data;
      })
      .addCase(friendRequest.fulfilled, (state, { payload }) => {
        if (payload === 200) {
          state.SendRequest.status = 'Success!';
        }
        if (payload === 409) {
          state.SendRequest.status = 'Friend request already active!';
        }
        if (payload === 400)
          state.SendRequest.status = 'No user found or server error';
      });
  },
});

export const { getstate, acceptFriend } = friendSlice.actions;

const acceptRequest = (username: String) => {
  apiParams('GET', 'acceptfriendrequest', username);
};

// const FriendRequest = (friendId: String) => {
//   apiParams('GET', 'sendfriendrequest', friendId).then(res => res.status);
// };

export default friendSlice.reducer;
