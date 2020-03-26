import * as actionTypes from './actionTypes';
import API from '../utils/api';

export const searchByDate = inputDate => {
  return { type: actionTypes.SEARCH_BY_DATE, payload: inputDate };
};

export const fetchStart = () => {
  return { type: actionTypes.FETCH_START };
};

export const fetchComplete = data => {
  return { type: actionTypes.FETCH_COMPLETE, payload: data };
};

export const fetchFilterComplete = data => {
  return { type: actionTypes.FETCH_FILTER_COMPLETE, payload: data };
};

export const fetchFail = error => {
  return { type: actionTypes.FETCH_FAIL, payload: error };
};

export const clearNameFilter = _ => {
  return { type: actionTypes.CLEAR_NAME_FILTER };
};

export const searchByNameThunk = inputQuery => dispatch => {
  dispatch(fetchStart(true));
  API.get(`launches`)
    .then(response => {
      let filteredData = [];
      if (response.data.length !== 0) {
        filteredData = response.data.filter(el =>
          el.mission_name.toLowerCase().includes(inputQuery.toLowerCase())
        );
      }
      dispatch(fetchFilterComplete(filteredData));
    })
    .catch(error => {
      dispatch(fetchFail(error));
    });
};
export const fetchLaunchDataThunk = (limit, offset) => dispatch => {
  dispatch(fetchStart(true));
  API.get(`launches?limit=${limit}&offset=${offset}`)
    .then(response => {
      dispatch(fetchComplete(response.data));
    })
    .catch(error => {
      dispatch(fetchFail(error));
    });
};
