import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import list, {listSaga} from './list';
import member, {memberSaga} from './member';

const rootReducer = combineReducers({
  auth,
  loading,
  list,
  member
});

export function* rootSaga() {
  yield all([authSaga(), listSaga(), memberSaga()]);
}

export default rootReducer;
