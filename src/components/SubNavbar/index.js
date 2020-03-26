import React from 'react';
import './index.scss';

const SubNavbar = props => {
  return (
    <div className="subnavbar">
      <div className="subnavbar__inner">{props.children}</div>
    </div>
  );
};

export default SubNavbar;
