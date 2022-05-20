import axios from 'axios';
import { Post } from './components/post';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '@/redux/diary/reducer';
import { State } from '@/redux/index';
import { useEffect } from 'react';

export const Posts = () => {
  const state = useSelector((state: State) => state.wine.Posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="container posts">
      <h1>Posts</h1>
      <div className="results-scroll-list">
        {state.map(data => {
          let i = 1;
          i++;
          return <Post key={i} post={data} />;
        })}
      </div>
    </div>
  );
};
