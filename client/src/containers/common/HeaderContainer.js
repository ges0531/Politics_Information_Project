import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../blog/Header';
import { logout } from '../../modules/auth';

const HeaderContainer = () => {
  // const { user } = useSelector(({ user }) => ({ user: user.user }));
  const { isLoginSuccess } = useSelector(({ auth }) => ({ isLoginSuccess: auth.isLoginSuccess }));
  const nick = localStorage.getItem('nick');
  const dispatch = useDispatch();
  const onLogout = () => {
    // localStorage.removeItem('nick');
    dispatch(logout());
  };
  return <Header isLoginSuccess = {isLoginSuccess} nick={nick} onLogout={onLogout} />;
};

export default HeaderContainer;
