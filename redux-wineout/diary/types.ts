export type Notes = {
  body: number;
  tannins: number;
  acidity: number;
  sweetness: number;
  intensity: number;
  finish: number;
};

export type DiaryType = {
  winename: string;
  producer: string;
  vintage: string;
  region: string;
  percentage: string;
  district: string;
  grape: string;
  tastingNotes: Notes;
  occasionDate?: Date;
};

export type ImagesUpload = {
  main: {
    url: string;
    file?: File;
    formdata?: Object;
  };
};

export type DiaryState = {
  Post: DiaryType;
  Teaser: {
    Post: DiaryType;
    Teaser: boolean;
  };
  Posts: DiaryType[];
  Images: ImagesUpload;
};

export const defaultState = {
  winename: '',
  producer: '',
  vintage: '',
  region: '',
  percentage: '',
  district: '',
  grape: '',
  tastingNotes: {
    body: 0,
    tannins: 0,
    acidity: 0,
    sweetness: 0,
    intensity: 0,
    finish: 0,
  },
};
