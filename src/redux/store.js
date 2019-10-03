import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  postReducer,
  fragmentReducer,
  courseReducer,
  teacherReducer,
  specialityReducer
} from './reducer';

export default createStore(
  combineReducers({
    postReducer,
    fragmentReducer,
    courseReducer,
    teacherReducer,
    specialityReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
