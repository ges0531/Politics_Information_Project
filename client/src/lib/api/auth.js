import client from './client';

// 로그인
export const login = ({ uMail, password }) =>
  client.post(`/user/signIn`, { uMail:uMail, uPass:password });

// 회원가입
export const register = ({ uMail, password, uName, uParty }) => 
  client.post('/user/signUp', { uMail:uMail, uPass:password, uName:uName, uParty:uParty });

// 로그아웃
export const logout = () => true;
