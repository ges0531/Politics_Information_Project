import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '../common/Button';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    margin: theme.spacing(1),
  },
  submit: {
    width: '100%',
  },
}));

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const textMap = {
  login: '로그인',
  register: '회원가입'
};

/**
 * 에러를 보여줍니다
 */
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;


const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const classes = useStyles();
  const text = textMap[type];

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {text}
          </Typography>

          <form className={classes.form} onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="이메일 주소"
              autoFocus

              autoComplete="uMail"
              name="uMail"
              onChange={onChange}
              value={form.uMail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="비밀번호"

              autoComplete="current-password"
              name="password"
              type="password"
              onChange={onChange}
              value={form.password}
            />
            {
              type === 'register' ?
                <div>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="비밀번호 확인"

                    autoComplete="new-password"
                    name="passwordConfirm"
                    type="password"
                    onChange={onChange}
                    value={form.passwordConfirm}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="닉네임"

                    autoComplete="uName"
                    name="uName"
                    onChange={onChange}
                    value={form.uName}
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    label="(선택) 관심있는 정당"

                    autoComplete="uParty"
                    name="uParty"
                    onChange={onChange}
                    value={form.uParty}
                    hidden
                  />
                </div>
                : <div />
            }
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button
              cyan fullWidth
              color="primary"
              className={classes.submit}
              variant="contained"
              style={{ marginTop: '1rem', fontSize: '1rem' }}
            >
              {text}
            </Button>
          </form>
          <Footer>
            {type === 'login' ? (
              <Link to="/view/SignUp">회원가입</Link>
            ) : (
                <Link to="/view/SignIn">로그인</Link>
              )}
          </Footer>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default AuthForm;
