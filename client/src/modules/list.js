import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as listAPI from '../lib/api/list';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_POLITICIANS,
  LIST_POLITICIANS_SUCCESS,
  LIST_POLITICIANS_FAILURE,
] = createRequestActionTypes('list/LIST_POLITICIANS');

export const listPolitians = createAction(
    LIST_POLITICIANS
);

const listPoliticianSaga = createRequestSaga(LIST_POLITICIANS, listAPI.listPoliticians);
export function* listSaga() {
  yield takeLatest(LIST_POLITICIANS, listPoliticianSaga);
}

const initialState = {
  politicians: null,
  error: null,
  // lastPage: 1,
};

const list = handleActions(
  {
    [LIST_POLITICIANS_SUCCESS]: (state, { payload: politicians, meta: response }) => ({
      ...state,
      politicians: politicians.list,
    }),
    [LIST_POLITICIANS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default list;
