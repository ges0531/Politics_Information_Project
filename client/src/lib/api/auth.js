import client from './client';

// 로그인
export const login = ({ username, password }) =>
  client.post('/user/signIn', { uMail:username, uPass:password });

// 회원가입
export const register = ({ username, password }) =>
  client.post('/user/signUp', { uMail:username, uPass:password, uName:null, uParty:null });

// 로그인 상태 확인
export const check = () => client.get('/user/signIn');

// 로그아웃
export const logout = () => client.post('/user/signIn');
