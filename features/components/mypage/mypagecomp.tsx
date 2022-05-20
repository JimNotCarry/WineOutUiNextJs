import Image from 'next/image';
import { useState, useEffect } from 'react';
import copy from '@/public/images/copy.png';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '@/redux/index';
import { Friend, FriendRequest, FriendState } from '@/redux/friends/types';
import { data, noRequestAvailable } from '../friends/requests/requests';
import { CheckAuth } from '@/scripts/check-response';
import {
  checkFriendRequests,
  getFriends,
  sendFriendRequest,
} from '@/redux/friends/reducer';
import { useRouter } from 'next/router';
import { friendList } from '../friends/friendlist/friendlist';
import { getFriendId, RemoveFriendID } from '@/redux/User/reducer';

const MypageComponent = () => {
  const [idflipped, setIdFlipper] = useState(false);
  const [addflipped, setAddFlipper] = useState(false);

  const friendState = useSelector((state: State) => state.friend);
  const friendId = useSelector((state: State) => state.user.friendid);
  var friendidrequest = '';
  const dispatch = useDispatch();
  const router = useRouter();

  const getIdAndFlip = () => {
    !idflipped ? dispatch(getFriendId()) : dispatch(RemoveFriendID());
    setIdFlipper(!idflipped);
  };

  useEffect(() => {
    const auth = async () => {
      const status: number | void = await CheckAuth();

      if (status === 200) {
        await dispatch(checkFriendRequests());
        await dispatch(getFriends());
      } else {
        router.push('login');
      }
    };

    auth();
  }, []);

  const handleChange = e => {
    friendidrequest = e.target.value;
  };

  return (
    <>
      <div className="container mypage">
        <div className="mypage-content">
          <section onClick={() => getIdAndFlip()} className="friendid-flip">
            <div className={`friendid-flipper  ${idflipped ? 'active' : ''}`}>
              <div className="front-button">SHOW FRIEND-ID</div>
              <div className="back-button">{friendId}</div>
            </div>
          </section>

          <section className="add-flip">
            <div className={`add-flipper  ${addflipped ? 'active' : ''}`}>
              <div
                className="front-button"
                onClick={() => setAddFlipper(!addflipped)}
              >
                ADD FRIEND
              </div>
              <div className="back-button input">
                <button onClick={() => setAddFlipper(!addflipped)}>X</button>
                <input
                  onChange={e => handleChange(e)}
                  type="text"
                  maxLength={6}
                />
                <button
                  onClick={() =>
                    dispatch(sendFriendRequest({ friendid: friendidrequest }))
                  }
                >
                  ADD
                </button>
              </div>
            </div>
          </section>
          <section></section>
          <section className="container friendrequests">
            <h2>Friend requests</h2>
            {friendState.FriendRequest?.map(req => data(req))}
            <hr></hr>
          </section>
          <section className="container friends">
            {friendState.FriendList?.map(data => friendList(data))}
          </section>
        </div>
      </div>
    </>
  );
};

export default MypageComponent;
