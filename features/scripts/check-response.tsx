import { AsyncThunk, AsyncThunkAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Action } from 'redux';

export const CheckAuth = async () => {
  const status = await axios
    .post('http://localhost:8080/api/checkAuth', Headers, {
      withCredentials: true,
    })
    .then(res => {
      return res.status;
    })
    .catch(e => {
      console.log(e);
    });

  return status;
};
