import React, { useEffect } from 'react';
import Image from 'next/image';
//import { State } from '../../../ProjRedux';
//import { useSelector, useDispatch } from 'react-redux';
//import { UserData } from '../../../Reducer/User/initialState';
//import { userCreators } from '../../../Reducer';
//import { bindActionCreators } from 'redux';
//import { CheckAuth } from '../../../ui/Script/recieveData';
import winebottle from '@/public/images/winebottle.png';
import book from '@/public/images/book.png';
import gear from '@/public/images/gear.png';

// import book from './../../../Static/Images/book.png';
// import gear from './../../../Static/Images/gear.png';

const MyPageMainComp = () => {
  //   const dispatch = useDispatch();

  //   const { GetUserDataByUsername } = bindActionCreators(userCreators, dispatch);

  //   const userdata: UserData = useSelector((state: State) => state.user);

  //   useEffect(() => {
  //     const auth = async () => {
  //       const status = await CheckAuth();

  //       if (status === 200) {
  //         GetUserDataByUsername();
  //       }
  //     };

  //     auth();
  //   }, []);

  return (
    <div className="container mypage">
      <div className="row mypage">
        <div className="row">
          <p className="greeting">Good evening, Linus.</p>
        </div>
        <div className="row bottle-icon">
          <div className="winebottle">
            <Image src={winebottle} alt="winebottle" />
          </div>
          <div className="row icon-text">
            <div className="text-frame bottle">
              <p>New Post</p>
            </div>
          </div>
        </div>
        <div className="row book-icon">
          <div className="book">
            <Image src={book} alt="winebottle" />
          </div>
          <div className="row icon-text">
            <div className="text-frame book">
              <p>Posts</p>
            </div>
          </div>
        </div>
        <div className="row gear-icon">
          <div className="gear">
            <Image src={gear} alt="winebottle" />
          </div>
          <div className="row icon-text">
            <div className="text-frame settings">
              <p>Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageMainComp;
