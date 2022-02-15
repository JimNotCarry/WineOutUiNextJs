import React, { useEffect } from 'react';
import Image from 'next/image';

import Base from '@/components/diary';
import UploadImage from '@/components/upload-image/index';
import Notes from '@/components/diary/notes';
import Cross from '@/public/images/cross.png';
import Social from '@/public/images/social.png';
import Confirm from '@/public/images/confirm.png';
import { CheckAuth } from '@/scripts/check-response';
import { useRouter } from 'next/router';
import { test, getUserinfo } from '@/graph/query';

export const Diary = () => {
  const router = useRouter();

  let trigger = false;

  // useEffect(() => {
  //   trigger = false;

  //   const auth = async () => {
  //     const status: any = await CheckAuth();

  //     if (status != 200) {
  //       router.push('login');
  //     }
  //   };

  //   auth();

  //   setTimeout(() => {
  //     trigger = true;
  //   }, 28000);
  // }, [trigger]);

  const LogMessage = (e: any) => {
    e.preventDefault();

    const data = {
      wine: e.target.wine.value,
      vintage: e.target.vintage.value,
      producer: e.target.producer.value,
      region: e.target.region.value,
      percentage: e.target.percentage.value,
      district: e.target.district.value,
      grape: e.target.grape.value,
      //image: e.target.image.value,
    };

    console.log(data);
  };

  () => test();

  // const LogRange = (e : any) => {
  //     console.log(e.target.value);
  // };

  return (
    <>
      <div className="container diary-default">
        <form onSubmit={e => LogMessage(e)}>
          <Base />
          <div className="container diary-image-notes">
            <div className="row image-notes">
              <div className="wine-image col-6">
                <UploadImage />
              </div>
              <div className="note-section col-6">
                <Notes />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Diary;

// <div className="row button-container">
// <div className="cancel-button col-4">
//   <div className="cancel-icon">
//     <Image src={Cross} alt="cancel-button" />
//   </div>
// </div>
// <div className="social-button col-4">
//   <div className="social-icon">
//     {/* <Image src={Social} alt="social-button" /> */}
//     <h1>Hej</h1>
//   </div>
// </div>
// <div className="confirm-icon col-4">
//   {/* <Image src={Confirm} alt="confirm-button" /> */}
//   <h1>Hej</h1>
// </div>
// </div>
