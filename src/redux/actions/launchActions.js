import axios from 'axios';

export const FETCH_LAUNCHES_REQUEST = 'FETCH_LAUNCHES_REQUEST';
export const FETCH_LAUNCHES_SUCCESS = 'FETCH_LAUNCHES_SUCCESS';
export const FETCH_LAUNCHES_FAILURE = 'FETCH_LAUNCHES_FAILURE';

const fetchLaunchesRequest = () => ({
  type: FETCH_LAUNCHES_REQUEST,
});

const fetchLaunchesSuccess = launches => ({
  type: FETCH_LAUNCHES_SUCCESS,
  payload: launches,
});

const fetchLaunchesFailure = error => ({
  type: FETCH_LAUNCHES_FAILURE,
  payload: error,
});

export const fetchLaunches = () => {
  return dispatch => {
    dispatch(fetchLaunchesRequest());
    axios
      .get('https://api.spacexdata.com/v3/launches')
      .then(response => {
        dispatch(fetchLaunchesSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchLaunchesFailure(error.message));
      });
  };
};
