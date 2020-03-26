import React from 'react';
import './listheader.scss';

const ListHeader = () => {
  return (
    <div className="listheader">
      <div className="list__hitem list__item--width30">Mission Name</div>
      <div className="list__hitem list__item--width25">Nationality</div>
      <div className="list__hitem list__item--width25">Manufacturer</div>
      <div className="list__hitem list__item--width15">Type</div>
      <div className="list__hitem list__item--width5"></div>
    </div>
  );
};

export default ListHeader;
