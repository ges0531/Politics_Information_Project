import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    marginLeft: theme.spacing(3),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [passwordCF, setPassCF] = useState("");
  const [authCheck, setAuthcheck] = useState(false);
  const [message, setMessage] = useState("");
  const [party, setParty] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    // alert(`submitting UserInfo ${}`);
  };

  const handleName = e => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const handlePassword = e => {
    e.preventDefault();
    setPass(e.target.value);
    if (checkPassword(password)) {
      setMessage("사용가능한 비밀번호입니다.");
    } else if (!checkPassword(password)) {
      setMessage("");
    }
  };
  const checkPassword = (str) => {
    const regExp = /^[A-Za-z0-9@]{6,20}$/;
    return regExp.test(str) ? true : false;
  }
  const handlePasswordCF = e => {
    e.preventDefault();
    setUsername(e.target.value);
  };

  const handleParty = e => {
    e.preventDefault();
    setParty(e.target.value);
  };

  const handleEmail = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const checkEmail = e => {
    e.preventDefault();

    //이메일 유효성 검사 함수
    const chkEmail = function (str) {
      const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      return regExp.test(str) ? true : false;
    };

    const inputEmail = {
      email: email
    };
    const email_info = {
      method: "GET",
      // body: JSON.stringify(inputEmail),
      headers: {
        "Content-Type": "application/json"
      }
    };

    if (chkEmail(email) === false) {
      alert("이메일 형식이 유효하지 않습니다.");
      setEmail("");
    } else {
      fetch("http://70.12.247.60:8080/user/" + email, email_info)
        .then(res => res.json())
        .then(json => {
          console.log(json);
          if (json === false) {
            alert("사용가능한 아이디입니다.");
            setAuthcheck(true);
          } else {
            alert("이미 존재하는 아이디입니다.");
          }
        });
    }
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="이메일 주소"
                  name="이메일"
                  value={email}
                  onChange={handleEmail}
                  autoFocus
                // autoComplete="email"
                />
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  // className={classes.submit}
                  onClick={checkEmail}
                  value="중복체크"
                >이메일 중복체크</Button>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  // autoComplete="fname"
                  name="이름"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="이름"
                  value={username}
                  onChange={handleName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="비밀번호"
                  label="비밀번호"
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePassword}
                  placeholder="영어 대/소문자, 숫자, @ 조합 6~20자"
                // autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                {message}
              </Grid>
              <Grid item xs={12}>
                (선택) 지지하는 정당이 있다면 선택해주세요
                <FormControl className={classes.formControl}>
                  <InputLabel>정당</InputLabel>
                  <Select
                    labelId="label"
                    id="party"
                    value={party}
                    onChange={handleParty}
                  >
                    <MenuItem value="선택하지않음">선택하지않음</MenuItem>
                    <hr/>
                    <MenuItem value="더불어민주당">더불어민주당</MenuItem>
                    <MenuItem value="자유한국당">자유한국당</MenuItem>
                    <MenuItem value="바른미래당">바른미래당</MenuItem>
                    <MenuItem value="우리공화당">우리공화당</MenuItem>
                    <MenuItem value="민주평화당">민주평화당</MenuItem>
                    <MenuItem value="민중당">민중당</MenuItem>
                    <MenuItem value="정의당">정의당</MenuItem>
                    <MenuItem value="새누리당">새누리당</MenuItem>
                    <MenuItem value="기본소득당">기본소득당</MenuItem>
                    <MenuItem value="우리미래">우리미래</MenuItem>
                    <MenuItem value="국제녹색당">국제녹색당</MenuItem>
                    <MenuItem value="노동당">노동당</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              회원가입
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/#/SignIn" variant="body2">
                  로그인 하기
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
    </React.Fragment>
  );
}
