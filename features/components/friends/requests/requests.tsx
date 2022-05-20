import React from 'react';
import {
  acceptFriend,
  getFriends,
  checkFriendRequests,
} from '@/redux/friends/reducer';
import { useSelector, useDispatch } from 'react-redux';

export const data = (data: Object) => {
  const dispatch = useDispatch();

  const click = async () => {
    await dispatch(acceptFriend({ username: data[0] }));
    await dispatch(checkFriendRequests());
    await dispatch(getFriends());
  };

  return (
    <section className="row requests">
      <p className="col-12 userdata">
        {data[1] + ' ' + data[2]}
        <p id="friendid">({data[0]})</p>
      </p>
      <button className="col-6 answer" onClick={() => click()}>
        Confirm
      </button>
      <button className="col-6 answer">Decline</button>
    </section>
  );
};

export const noRequestAvailable = () => {
  return (
    <>
      <p>No requests available</p>
    </>
  );
};
