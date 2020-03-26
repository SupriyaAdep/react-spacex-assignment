import React from 'react';
import ListItem from './ListItem';

const ListBody = props => {
  const { data, showDetails } = props;
  return (
    data.length !== 0 &&
    data.map((item, index) => (
      <ListItem item={item} key={index} showDetails={showDetails} />
    ))
  );
};

export default ListBody;
