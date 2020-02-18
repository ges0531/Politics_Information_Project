import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, isLoginSuccess, nick, mail } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    isLoginSuccess: auth.isLoginSuccess,
    nick: auth.uName,
    mail: auth.uMail
  }));
  
  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      }),
      );
    };
    
    // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
      e.preventDefault();
      const { uMail, password } = form;
      dispatch(login({ uMail, password }));
    };
    
    // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
    useEffect(() => {
      dispatch(initializeForm('login'));
    }, [dispatch]);
    
    useEffect(() => {
      if (authError) {
        console.log('오류 발생');
        console.log(authError);
        setError('로그인 실패');
        return;
       }
       
      if (isLoginSuccess) {
        console.log('로그인 성공');
        sessionStorage.setItem('nick', nick);
        sessionStorage.setItem('mail', mail);
        history.push('/')
      }
    }, [auth, authError, dispatch]);
    
    useEffect(() => {
      if (isLoginSuccess) {
        history.push('/');
      }
    }, [history, isLoginSuccess]);
    
    return (
      <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      />
      );
    };
    
    export default withRouter(LoginForm);
    