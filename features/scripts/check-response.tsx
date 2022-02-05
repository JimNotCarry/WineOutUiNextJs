import axios from 'axios';

export const CheckAuth = () => {
  return axios
    .get('http://localhost:8080/api/checkAuth')
    .then(res => {
      return res.status;
    })
    .catch(e => {
      console.log(e);
    });
};
