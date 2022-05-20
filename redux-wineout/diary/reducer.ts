import {
  DiaryType,
  DiaryState,
  defaultState,
  ImagesUpload,
  Notes,
} from './types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserinfo, test, testquery } from '@/graph/query';

import axios from 'axios';
import { api, apiParams, apiParamsImages } from '../api';
import { type } from 'os';

export const getPosts = createAsyncThunk('diary/Posts', async () => {
  return await axios('http://localhost:8080/api/posts', {
    method: 'GET',
    withCredentials: true,
  }).then(res => {
    return res.data;
  });
});

export const getImage = createAsyncThunk(
  'diary/image',
  async (occasionDate: String) => {
    //const formated = FormatDate(date);

    //console.log(formated);

    return await axios('http://localhost:8080/api/images/getFile', {
      method: 'GET',
      withCredentials: true,
      params: {
        occasionDate: occasionDate,
      },
    }).then(res => {
      return res.data;
    });
  }
);

export const initialState: DiaryState = {
  Post: defaultState,
  Teaser: {
    Post: defaultState,
    Teaser: false,
  },
  Posts: [],
  Images: {
    main: {
      url: '',
    },
  },
};

export const diarySlice = createSlice({
  name: 'diaryslice',
  initialState,
  reducers: {
    ReturnData(state) {
      return state;
    },
    SetTeaser(state, action: PayloadAction<DiaryType>) {
      state.Teaser.Teaser = true;
      state.Post.tastingNotes = action.payload.tastingNotes;
      state.Teaser.Post = action.payload;
    },
    ResetTeaser(state) {
      state.Teaser.Teaser = false;
      state.Post = defaultState;
      state.Teaser.Post = defaultState;
    },
    PostDiary(state, occasionDate: PayloadAction<Date>) {
      state.Post.occasionDate = occasionDate.payload;
      postData(state);
    },
    SetDiaryDataOnInput(state, action: PayloadAction<DiaryType>) {
      state.Post = action.payload;
    },
    SetDiaryTastingnotes(state, action: PayloadAction<Notes>) {
      state.Post.tastingNotes = action.payload;
    },
    SetImages(state, action: PayloadAction<ImagesUpload>) {
      state.Images.main.file = action.payload.main.file;
      state.Images.main.url = action.payload.main.url;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPosts.fulfilled, (state, { payload }) => {
        state.Posts = payload;
      })
      .addCase(getImage.fulfilled, (state, { payload }) => {
        state.Images.main.url = 'data:image/png;base64,' + payload;
      });
  },
});

export const {
  ReturnData,
  PostDiary,
  SetTeaser,
  ResetTeaser,
  SetImages,
  SetDiaryDataOnInput,
  SetDiaryTastingnotes,
} = diarySlice.actions;
export default diarySlice.reducer;

// const GetPosts = () => {
//   api('GET', '');
// };

const postData = (state: DiaryState) => {
  const data = JSON.stringify(state.Post);

  const formData = new FormData();
  formData.append('file', state.Images.main.file);

  const formated = FormatDate(state.Post.occasionDate);

  console.log(formated);

  api('POST', 'postdiary', data);
  apiParamsImages(
    'images/postImages?' +
      new URLSearchParams({
        occasiondate: formated,
      }),
    formData
  );
};

const FormatDate = (date: Date) => {
  return date.toLocaleDateString('se-SV', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};
