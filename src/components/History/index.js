import React, { useEffect } from 'react';
import useFetchData from '../custom-hook/useFetchData';
import Placeholder from '../../UI/Placeholder';

import Item from './Item';
import './index.scss';

const SpaceXHistory = () => {
  const [{ data, loading, error }, fetchData] = useFetchData([]);

  useEffect(() => {
    fetchData('history');
  }, []);

  if (loading) return <Placeholder />;
  if (error) return <p>Error while fetching</p>;
  return (
    <div className="timeline" id="timeline">
      {data.map(list => (
        <Item list={list} />
      ))}
    </div>
  );
};

export default SpaceXHistory;
