import React, { Component, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { State } from '@/redux/index';
import { useSelector, useDispatch } from 'react-redux';
import { userCreators } from '@/redux/creators/index';
import { bindActionCreators } from 'redux';
import { CheckAuth } from '@/scripts/check-response';
import winebottle from '@/public/images/winebottle.png';
import book from '@/public/images/book.png';
import gear from '@/public/images/gear.png';
import { ResetTeaser } from '@/redux/diary/reducer';
import { initialState, SetFirstName, getFirstname } from '@/redux/User/reducer';
import { api } from '@/redux/api';
import { checkFriendRequests } from '@/redux/friends/reducer';

const MainMenuComp = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const userdata: initialState = useSelector((state: State) => state.user);
  const friendRequests = useSelector(
    (state: State) => state.friend.FriendRequest
  );

  console.log(friendRequests);

  const generateTimeMessage = () => {
    const time = new Date().getTime();

    //console.log((document.cookie = 'access_token'));

    if (time < 12) {
      return 'morning';
    }

    if (time > 12) {
      return 'afternoon';
    }

    if (time > 18 && time < 5) {
      return 'evening';
    }
  };

  useEffect(() => {
    const auth = async () => {
      const status: number | void = await CheckAuth();

      if (status === 200) {
        dispatch(getFirstname());
        dispatch(checkFriendRequests());
      } else {
        router.push('login');
      }
    };

    auth();
  }, []);

  const goToDiary = () => {
    dispatch(ResetTeaser());
    router.push('/diary');
  };

  const setCookie = () => {
    document.cookie = 'access_token=shit, path=/';

    console.log(document.cookie);
  };

  return (
    <div className="container mypage">
      <div className="row login-content">
        <div className="greeting">
          <h4>Good {generateTimeMessage()},</h4>
          <h4>{userdata.firstname}</h4>
        </div>

        <div className="new-post">
          <div className="wine-icon">
            <div onClick={() => goToDiary()}>
              <Image
                src={winebottle}
                alt="winebottle"
                className="wine-bottle"
                layout="fill"
              />
            </div>
          </div>
          <div className="icon-label">
            <p className="">NEW POST</p>
          </div>
        </div>
        <div className="posts">
          <div className="book-icon">
            <div onClick={() => router.push('/posts')}>
              <Image src={book} alt="book" className="book" layout="fill" />
            </div>
          </div>
          <div className="icon-label">
            <p className="">POSTS</p>
          </div>
        </div>
        <div className="settings">
          <div className="gear-icon">
            <div onClick={() => router.push('/mypage')}>
              <Image src={gear} alt="gear" className="gear" layout="fill" />
            </div>
          </div>
          <div className="icon-label">
            <p className="">SETTINGS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenuComp;
