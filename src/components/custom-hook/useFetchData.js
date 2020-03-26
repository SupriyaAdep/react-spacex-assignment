import { useState } from 'react';
import API from '../../utils/api';

const useFetchData = defaultState => {
  const [data, setData] = useState(defaultState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const initialState = () => {
    setError(false);
    setLoading(true);
  };

  const fetch = async endpoint => {
    initialState();
    try {
      const result = await API.get(`${endpoint}`);
      setData(result.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  return [{ data, loading, error }, fetch];
};

export default useFetchData;
