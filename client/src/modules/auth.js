import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest, call } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER'
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
  'auth/LOGIN'
);

const LOGOUT = 'auth/LOGOUT';

export const logout = createAction(LOGOUT);

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form, // register , login
    key, // uMail, password, passwordConfirm
    value // 실제 바꾸려는 값
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form); // register / login
export const register = createAction(REGISTER, ({ uMail, password, uName, uParty }) => ({
  uMail,
  password,
  uName,
  uParty
}));

export const login = createAction(LOGIN, ({ uMail, password }) => ({
  uMail,
  password
}));

function* logoutSaga() {
  try {
    yield call(authAPI.logout); // logout API 호출
    sessionStorage.removeItem('nick'); // sessionStorage 에서 user 제거
    sessionStorage.removeItem('mail');
  } catch (e) {
    console.log(e);
  }
}

// saga 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  register: {
    uMail: '',
    password: '',
    passwordConfirm: '',
    uName: '',
    uParty: ''
  },
  login: {
    uMail: '',
    password: '',
    uName:'',
    isLoginSuccess:false
  },
  auth: null,
  authError: null
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, draft => {
        draft[form][key] = value; // 예: state.register.uMail을 바꾼다
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null // 폼 전환 시 회원 인증 에러 초기화
    }),
    // 회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth
    }),
    // 회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error
    }),
    // 로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      uName:auth.user.uName,
      uMail:auth.user.uMail,
      isLoginSuccess:true,
      auth
    }),
    // 로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
      isLoginSuccess: false
    }),
    [LOGOUT]: state => ({
      ...state,
      isLoginSuccess: false,
      auth:null
    }),
  },
  initialState
);

export default auth;
