import client from './client';

// localStorage.removeItem('nick');

// 로그인
export const login = ({ uMail, password }) =>
  client.post('/user/signIn', { uMail:uMail, uPass:password })
        .then(res=>localStorage.setItem('nick', JSON.stringify(res.data.user.uName)));

// 회원가입
export const register = ({ uMail, password }) =>
  client.post('/user/signUp', { uMail:uMail, uPass:password, uName:null, uParty:null });

// 로그인 상태 확인
export const check = () => client.get('/user/signIn');

// 로그아웃
export const logout = () => client.post('/user/signIn');
