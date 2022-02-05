import React from 'react';

const Base = () => {
  return (
    <>
      <div className="upper-part">
        <div className="row wine">
          <label>wine</label>
          <input className="wine" name="wine" type="text" />
        </div>

        <div className="row producer-vintage">
          <label className="producet-label col-5">producer</label>
          <label className="vintage-label col-4">vintage</label>
          <input className="vintage-text col-3" name="vintage" type="text" />
          <input className="producer-text" name="producer" type="text" />
        </div>

        <div className="row region-percentage">
          <label className="region-label col-4">region</label>
          <label className="percentage-label col-5">percentage</label>
          <input
            className="percentage-text col-3"
            name="percentage"
            type="text"
          />
          <input className="region-text" name="region" type="text" />
        </div>

        <div className="row district">
          <label>district</label>
          <input className="district-text" name="district" type="text" />
        </div>

        <div className="row grape">
          <label>grape</label>
          <input className="grape-text" name="grape" type="text" />
        </div>
      </div>
    </>
  );
};

export default Base;
