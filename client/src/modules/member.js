import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as listAPI from '../lib/api/list';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_MEMBER,
  READ_MEMBER_SUCCESS,
  READ_MEMBER_FAILURE,
] = createRequestActionTypes('member/READ_MEMBER');
const UNLOAD_MEMBER = 'member/UNLOAD_MEMBER'; // 포스트 페이지에서 벗어날 때 데이터 비우기

export const readMember = createAction(READ_MEMBER, pId => pId);
export const unloadMember = createAction(UNLOAD_MEMBER);

const readMemberSaga = createRequestSaga(READ_MEMBER, listAPI.getMemberDetail);
export function* memberSaga() {
  yield takeLatest(READ_MEMBER, readMemberSaga);
}

const initialState = {
  politician: null,
  error: null,
};

const member = handleActions(
  {
    [READ_MEMBER_SUCCESS]: (state, { payload: politician }) => ({
      ...state,
      politician:politician.post.politician
    }),
    [READ_MEMBER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_MEMBER]: () => initialState,
  },
  initialState,
);

export default member;
