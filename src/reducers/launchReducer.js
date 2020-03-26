import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils/updateObject';

const initialState = {
  launches: [],
  loading: false,
  error: null
};

const fetchStarted = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchComplete = (state, action) => {
  return updateObject(state, {
    loading: false,
    purchased: true,
    launches: state.launches.concat(action.payload)
  });
};

const fetchFailed = (state, action) => {
  return updateObject(state, { loading: false, error: true });
};

const fetchFilterComplete = (state, action) => {
  return updateObject(state, {
    loading: false,
    purchased: true,
    launches: action.payload
  });
};

const clearList = (state, action) => {
  return updateObject(state, initialState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COMPLETE:
      return fetchComplete(state, action);
    case actionTypes.FETCH_FILTER_COMPLETE:
      return fetchFilterComplete(state, action);
    case actionTypes.FETCH_START:
      return fetchStarted(state, action);
    case actionTypes.CLEAR_NAME_FILTER:
      return clearList(state, action);
    default:
      return state;
  }
};

// Selector
// const getMissionNames = state => {
//   return state.launches.filter(todo => {
//     return !todo.completed;
//   });
// };
export default reducer;
