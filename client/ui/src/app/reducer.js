import { combineReducers } from 'redux';
import editReducer from './EditSlice';
import showModal from './ShowDetails'

const rootReducer = combineReducers({
  edit: editReducer, 
  showModal:showModal
});

export default rootReducer;
