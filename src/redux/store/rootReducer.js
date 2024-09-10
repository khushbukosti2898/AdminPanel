import { combineReducers } from 'redux';
import projectReducer from '../slices/projectsSlice';

export const rootReducer = combineReducers({
  projects: projectReducer,
});
