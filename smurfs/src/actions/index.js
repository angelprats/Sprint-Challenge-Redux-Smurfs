/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const ADD_SMURF = 'ADD_SMURF';
export const ADDED_SMURF = 'ADDED_SMURF';
export const ERROR = 'ERROR';


import axios from 'axios'

export const getSmurf = () => dispatch => {
  dispatch({ type: FETCHING_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: FETCHING_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCHING_FAILURE, payload: err }))
};

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => dispatch({ type: ADDED_SMURF, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: err }))
}

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
