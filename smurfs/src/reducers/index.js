/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_START, FETCHING_SUCCESS, FETCHING_FAILURE, ADDED_SMURF, ADD_SMURF, ERROR } from '../actions'


const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
  newSmurf: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return { ...state, fetchingSmurfs: true };

    case FETCHING_SUCCESS:
      return { ...state, smurfs: action.payload };

    case FETCHING_FAILURE:
      return {
        ...state, fetchingSmurfs: false, error: action.payload
      };

    case ADDED_SMURF:
      return {
        ...state, newSmurf: action.payload
      }

    case ADD_SMURF:
      return { ...state, addingSmurf: true };

    case ERROR:
      return {
        ...state, error: action.payload
      }



    default: return state;
  }
}

export default rootReducer;

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
