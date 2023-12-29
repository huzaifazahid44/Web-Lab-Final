import { combineReducers } from '@reduxjs/toolkit';
import emojisReducer from '../features/EmojisSlice';
import detailsReducer from '../features/DetailsSlice';

const rootReducer = combineReducers({
  emojis: emojisReducer,
  details: detailsReducer,
});

export default rootReducer;
