import axios, { Axios, Method } from 'axios';
import { Obj } from 'reselect/es/types';

export const api = (methodType: Method, endpoint: String, body?: String) => {
  return axios({
    method: methodType,
    url: 'http://localhost:8080/api/' + endpoint,
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    withCredentials: true,
  });
};

export const apiParams = (
  methodType: Method,
  endpoint: string,
  data?: Object | String
) => {
  return axios({
    method: methodType,
    url: 'http://localhost:8080/api/' + endpoint,
    params: data,
    withCredentials: true,
  });
};

export const apiParamsImages = (endpoint: string, data?: Object) => {
  axios.post('http://localhost:8080/api/' + endpoint, data, {
    withCredentials: true,
  });
};
