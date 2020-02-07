import { combineReducers } from 'redux';
// import { all } from 'redux-saga/effects';
import auth from './auth';
// import loading from './loading';
// import user, { userSaga } from './user';
import write from './write';
// import post, { postSaga } from './post';
// import posts, { postsSaga } from './posts';

const rootReducer = combineReducers({
  auth,
  write,
});

export default rootReducer;