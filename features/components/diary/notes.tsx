import React from 'react';
import style from './styles/notes.module.scss';

const Notes = () => {
  return (
    <>
      <label className="notes-label" htmlFor="tannins">
        body
      </label>
      <input className={style.slider} type="range" min="0" max="100"></input>
      <label className="notes-label" htmlFor="tannins">
        tannins
      </label>
      <input className={style.slider} type="range" min="0" max="100"></input>
      <label className="notes-label" htmlFor="tannins">
        acidity
      </label>
      <input className={style.slider} type="range" min="0" max="100"></input>
      <label className="notes-label" htmlFor="tannins">
        sweetness
      </label>
      <input className={style.slider} type="range" min="0" max="100"></input>
      <label className="notes-label" htmlFor="tannins">
        intesity
      </label>
      <input className={style.slider} type="range" min="0" max="100"></input>
      <label className="notes-label" htmlFor="tannins">
        finish
      </label>
      <input className={style.slider} type="range" min="0" max="100"></input>
    </>
  );
};

export default Notes;
