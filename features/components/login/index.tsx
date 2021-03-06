import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import axios from 'axios';
import winebottle from '@/public/images/winebottle.png';

const Login = () => {
  const router = useRouter();

  const logIn = (e: any) => {
    e.preventDefault();

    const user: string = e.target.username.value;
    const pass: string = e.target.password.value;

    const params = new URLSearchParams();

    params.append('username', user);
    params.append('password', pass);

    axios
      .post('http://localhost:8080/login', params, { withCredentials: true })
      .then(res => {
        if (res.status === 200) {
          router.push('/main');
        } else if (res.status !== 200) {
          console.log('Error');
        }
      });
  };

  return (
    <div className="container login">
      <div className="row login">
        <div className="top-content">
          <p className="header-text">wine'out</p>
          <div className="image-section">
            <div className="winebottle">
              <Image src={winebottle} alt="winebottle" />
            </div>
          </div>
        </div>
        <div className="bottom-content">
          <h3>Login</h3>
          <form onSubmit={e => logIn(e)}>
            <input name="username" type="text" placeholder="Username"></input>
            <br />
            <input
              name="password"
              type="password"
              placeholder="Password"
            ></input>
            <button className="login-button" type="submit">
              Create Memories
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
