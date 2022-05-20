import React from 'react';
import style from './styles/notes.module.scss';
import { State } from '@/redux/index';
import { useSelector } from 'react-redux';

const Notes = () => {
  const tastingnotes = useSelector(
    (state: State) => state.wine.Post.tastingNotes
  );

  const teaser = useSelector((state: State) => state.wine.Teaser);

  return (
    <>
      <label className="notes-label" htmlFor="body">
        body
      </label>
      <input
        className={style.slider}
        defaultValue={tastingnotes.body}
        id="tastingNotes"
        name="body"
        type="range"
        min="0"
        max="100"
      ></input>
      <label className="notes-label" htmlFor="tannins">
        tannins
      </label>
      <input
        className={style.slider}
        defaultValue={tastingnotes.tannins}
        id="tastingNotes"
        name="tannins"
        type="range"
        min="0"
        max="100"
      ></input>
      <label className="notes-label" htmlFor="acidity">
        acidity
      </label>
      <input
        className={style.slider}
        defaultValue={tastingnotes.acidity}
        id="tastingNotes"
        name="acidity"
        type="range"
        min="0"
        max="100"
      ></input>
      <label className="notes-label" htmlFor="sweetness">
        sweetness
      </label>
      <input
        className={style.slider}
        defaultValue={tastingnotes.sweetness}
        id="tastingNotes"
        name="sweetness"
        type="range"
        min="0"
        max="100"
      ></input>
      <label className="notes-label" htmlFor="intensity">
        intensity
      </label>
      <input
        className={style.slider}
        defaultValue={tastingnotes.intensity}
        id="tastingNotes"
        name="intensity"
        type="range"
        min="0"
        max="100"
      ></input>
      <label className="notes-label" htmlFor="finish">
        finish
      </label>
      <input
        className={style.slider}
        defaultValue={tastingnotes.finish}
        id="tastingNotes"
        name="finish"
        type="range"
        min="0"
        max="100"
      ></input>{' '}
    </>
  );
};

export default Notes;
