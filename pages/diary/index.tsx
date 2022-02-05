import React from 'react';

import Base from '@/components/diary/base';

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
      image: e.target.image.value,
    };

    console.log(data);
  };

  // const LogRange = (e : any) => {
  //     console.log(e.target.value);
  // };

  return (
    <div className="container diary-default">
      <form onSubmit={e => LogMessage(e)}>
        <Base />
      </form>
    </div>
  );
};

export default Diary;
