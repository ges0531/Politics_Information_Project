import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user';
import auth from '../../modules/auth';

const HeaderContainer = () => {
  // const { user } = useSelector(({ user }) => ({ user: user.user }));
  const nick = localStorage.getItem('nick');
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <Header nick={nick} onLogout={onLogout} />;
};

export default HeaderContainer;
