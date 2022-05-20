import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Base from '@/components/diary';
import UploadImage from '@/components/upload-image/index';
import Notes from '@/components/diary/notes';
import Footer from '@/components/footer/menu-footer';
import Cross from '@/public/images/cross.png';
import Social from '@/public/images/social.png';
import Confirm from '@/public/images/confirm.png';
import { CheckAuth } from '@/scripts/check-response';
import { useRouter } from 'next/router';
import { test, getUserinfo } from '@/graph/query';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@/redux/index';
import { DiaryType, DiaryState, defaultState } from '@/redux/diary/types';
import {
  PostDiary,
  SetDiaryDataOnInput,
  SetDiaryTastingnotes,
} from '@/redux/diary/reducer';

export const Diary = () => {
  const router = useRouter();

  const state = useSelector((state: State) => state.wine.Post);

  const change = e => {
    let newData = null;

    if (e.target.id === 'tastingNotes') {
      newData = {
        ...state.tastingNotes,
        [e.target.name]: e.target.value,
      };
      dispatch(SetDiaryTastingnotes(newData));
    } else {
      newData = {
        ...state,
        [e.target.name]: e.target.value,
      };
      dispatch(SetDiaryDataOnInput(newData));
    }
  };

  const PostData = e => {
    e.preventDefault();

    const occasionDate = new Date();

    occasionDate.setDate(e.target['day'].value);
    occasionDate.setMonth(e.target['month'].value - 1);
    occasionDate.setFullYear(e.target['year'].value);

    dispatch(PostDiary(occasionDate));
  };

  const teaser = useSelector((state: State) => state.wine.Teaser);

  const dispatch = useDispatch();

  const image = {
    src: Social,
    width: 100,
    height: 100,
  };

  const routing = '/social';

  return (
    <>
      <form onSubmit={e => PostData(e)} onChange={e => change(e)}>
        <fieldset className="diary-default" disabled={teaser.Teaser}>
          <div className="diary-top-content">
            <Base />
          </div>
          <div className="diary-bottom-content">
            <div className="row image-notes">
              <div className="col-6 no-float uploader-section">
                <UploadImage />
              </div>
              <div className="note-section col-6">
                <Notes />
              </div>
            </div>
          </div>
          <div className="footer-section">
            <Footer data={image} routing={routing} />
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default Diary;
