import axios from 'axios';

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
