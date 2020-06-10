import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.register,
    auth: auth.auth,
    authError: auth.authError
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();

    const chkEmail = function (str) {
      const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      return regExp.test(str) ? true : false;
    };

    const { uMail, password, passwordConfirm, uName, uParty } = form;
    // 하나라도 비어있다면
    if(chkEmail(uMail) === false) {
      setError('이메일 형식이 유효하지 않습니다.');
      dispatch(
        changeField({ form: 'register', key: 'uMail', value: '' }),
      );
      return;
    }

    if ([uMail, password, passwordConfirm, uName].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }

    // 비밀번호가 일치하지 않는다면
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({ form: 'register', key: 'password', value: '' }));
      dispatch(
        changeField({ form: 'register', key: 'passwordConfirm', value: '' }),
      );
      return;
    }

    dispatch(register({ uMail, password, uName, uParty }));
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  // 회원가입 성공 / 실패 처리
  useEffect(() => {
    if (authError) {
      // 계정명이 이미 존재할 때
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정명입니다.');
        return;
      }
      // 기타 이유
      setError('회원가입 실패');
      return;
    }

    if (auth) {
      console.log('회원가입 성공');
      const { uName } = auth;
      sessionStorage.setItem('nick', uName);
      history.push('/');
    }
  }, [auth, authError, dispatch]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(RegisterForm);
