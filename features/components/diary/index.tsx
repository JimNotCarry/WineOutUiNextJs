import React, { useEffect } from 'react';
import { DiaryType } from '@/redux/diary/types';
import { useSelector } from 'react-redux';
import { State } from '@/redux/index';

const Base = () => {
  const today = new Date();

  const teaser = useSelector((state: State) => state.wine.Teaser);
  const diary = useSelector((state: State) => state.wine.Post);

  const teaserDate = teaser.Post.occasionDate
    ? new Date(teaser.Post.occasionDate)
    : null;

  const day = teaserDate ? teaserDate.getDate() : today.getDate();
  const month = teaserDate ? teaserDate.getMonth() + 1 : today.getMonth() + 1;
  const year = teaserDate ? teaserDate.getFullYear() : today.getFullYear();

  return (
    <div className="content">
      <div className="row wine-date">
        <label className="winename-label col-8">wine</label>
        <input
          className="day col-1"
          type="text"
          name="day"
          defaultValue={day}
          maxLength={2}
        ></input>
        <input
          className="month col-1"
          type="text"
          name="month"
          defaultValue={month}
          maxLength={2}
        ></input>
        <input
          className="year col-2"
          type="text"
          name="year"
          defaultValue={year}
          maxLength={4}
        ></input>
        <input
          className="wine"
          name="winename"
          type="text"
          placeholder={teaser.Post?.winename}
          defaultValue={diary.winename}
        />
      </div>

      <div className="row producer-vintage">
        <label className="producer-label col-5">producer</label>
        <label className="vintage-label col-4">vintage</label>
        <input
          className="vintage-text col-3"
          name="vintage"
          type="text"
          placeholder={teaser.Post?.vintage}
          defaultValue={diary.vintage}
        />
        <input
          className="producer-text"
          name="producer"
          type="text"
          placeholder={teaser.Post?.producer}
          defaultValue={diary.producer}
        />
      </div>

      <div className="row region-percentage">
        <label className="region-label col-4">region</label>
        <label className="percentage-label col-5">percentage</label>
        <input
          className="percentage-text col-3"
          name="percentage"
          type="text"
          placeholder={teaser.Post?.percentage}
          defaultValue={diary.percentage}
        />
        <input
          className="region-text"
          name="region"
          type="text"
          placeholder={teaser.Post?.region}
          defaultValue={diary.region}
        />
      </div>

      <div className="row district">
        <label>district</label>
        <input
          className="district-text"
          name="district"
          type="text"
          placeholder={teaser.Post?.district}
          defaultValue={diary.district}
        />
      </div>

      <div className="row grape">
        <label>grape</label>
        <input
          className="grape-text"
          name="grape"
          type="text"
          placeholder={teaser.Post?.grape}
          defaultValue={diary.grape}
        />
      </div>
    </div>
  );
};

export default Base;
