/* eslint-disable quotes */
import { Dispatch } from 'redux';
import { ActionType } from './action-types';
import { Action } from './actions';
import { getUserinfo } from '@/graph/query';
import axios from 'axios';

export const GetUserDataByUsername = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      let options = {
        credentials: 'include',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(getUserinfo()),
      };

      const res = await fetch('http://localhost:8080/api/userdata', {
        credentials: 'include',
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: getUserinfo(),
      }).then(resp =>
        resp.json().then(result => {
          return result.data.UserData;
        })
      );

      // const res = await axios
      //   .post(
      //     'http://localhost:8080/api/userdata',
      //     {
      //       body: getUserinfo(),
      //     },
      //     {
      //       withCredentials: true,
      //       headers: {
      //         'Content-Type': 'text/plain',
      //       },
      //     }
      //   )
      //   .then(res => {
      //     console.log(res);
      //   });

      // console.log(res);

      dispatch({
        type: ActionType.USERDATA,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
