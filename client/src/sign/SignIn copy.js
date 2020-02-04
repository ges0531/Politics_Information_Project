import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";

import { Button, Icon } from 'semantic-ui-react';



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

export default function SignIn() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  let history = useHistory();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`submitting Name ${email}`);
    window.sessionStorage.setItem('email', email);
    history.push('/');
  }

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
        </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="이메일 주소"
              name="이메일"
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="비밀번호"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="로그인 유지하기"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              value="Submit"
            >
              로그인
          </Button>
          </form>
          
          <Grid container item xs={12}>
            <Grid item xs>
              <Button color='facebook' style={{width:183, marginLeft:2}}>
                <Icon name='facebook' /> Facebook
          </Button>
            </Grid>
            <Grid item xs>
              <Button color='google plus' style={{width:183, marginLeft:5}}>
                <Icon name='google' /> Google
          </Button>
            </Grid>
          </Grid>


          <Grid container style={{marginTop:7}}>
            <Grid item xs>
              <Link href="/#" variant="body2">
                비밀번호를 잊으셨나요?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/#/SignUp" variant="body2">
                {"가입하러 가기"}
              </Link>
            </Grid>
          </Grid>
        </div>
        <Box mt={8}>
        </Box>
      </Container>
    </React.Fragment>
  );
}