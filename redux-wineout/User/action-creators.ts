import { Dispatch } from 'redux';
import { ActionType } from './action-types';
import { Action } from './actions';
import { getUserinfo } from '@/graph/query';

export const GetUserDataByUsername = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const res = await fetch('http://localhost:8080/api/recieve', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: getUserinfo(),
      })
        .then(r => r.json())
        .then(data => {
          return data.data.user;
        });

      dispatch({
        type: ActionType.USERDATA,
        payload: res,
      });
    } catch (err) {
      console.log('Forbidden');
    }
  };
};
