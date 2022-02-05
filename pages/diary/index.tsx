import React from 'react';

import Base from '@/components/diary';
import UploadImage from '@/components/upload-image/index';
import Notes from '@/components/diary/notes';

export const Diary = () => {
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
