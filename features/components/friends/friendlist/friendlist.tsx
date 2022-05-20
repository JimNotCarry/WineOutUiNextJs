import React from 'react';

export const friendList = (data: Object) => {
  return (
    <section className="row friendList">
      <p className="col-10 frienddata">
        {data[1] + ' ' + data[2]}
        <p id="friendid">({data[0]})</p>
      </p>
      <div className="col-2">X</div>
    </section>
  );
};
