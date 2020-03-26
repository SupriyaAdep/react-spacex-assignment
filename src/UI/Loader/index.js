import React from 'react';
import './index.scss';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
