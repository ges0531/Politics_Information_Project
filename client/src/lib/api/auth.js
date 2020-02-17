import client from './client';
import axios from 'axios';

// 로그인
export const login = ({ uMail, password }) =>
  axios.post(`http://52.79.219.137:80//user/signIn`, { uMail:uMail, uPass:password });

// 회원가입
export const register = ({ uMail, password, uName, uParty }) => 
  client.post('/user/signUp', { uMail:uMail, uPass:password, uName:uName, uParty:uParty });

// 로그인 상태 확인 -- 지워야 할 부분
export const check = () => client.get('/user/signIn');

// 로그아웃
export const logout = () => true;
