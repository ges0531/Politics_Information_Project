import React from 'react'
import axios from 'axios'
// import { Hidden } from '@material-ui/core';

// import { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import palette from '../../lib/styles/palette';

// import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Avatar from '@material-ui/core/Avatar';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';

// import Button from '../common/Button';

const test = () => {
    const code = window.location.href.split('code=')[1];
    const kId = '';
    const kakaoemail = '';

    axios.get(`http://52.79.219.137:80/kakaologin?code=${code}`)
      // .then(res => console.log(res));
      // .then(res=> {
      //   console.log(res);
      //   console.log(res.data.kId);
      //   kId = res.data.kId;
      //   console.log(res.data.uMail);
      //   kakaoemail = res.data.uMail;
      // })
      .then(res=>res.json())
      .then(data=>console.log(data));
    console.log(kId);
    console.log(kakaoemail);

    // const classes = makeStyles(theme => ({
    //     paper: {
    //       marginTop: theme.spacing(8),
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'center',
    //     },
    //     avatar: {
    //       margin: theme.spacing(1),
    //       backgroundColor: theme.palette.secondary.main,
    //     },
    //     form: {
    //       width: '100%', // Fix IE 11 issue.
    //       margin: theme.spacing(1),
    //     },
    //     submit: {
    //       width: '100%',
    //     },
    //   }));

    // const ErrorMessage = styled.div`
    //   color: red;
    //   text-align: center;
    //   font-size: 0.875rem;
    //   margin-top: 1rem;
    // `;
      
    
    return(
      <div>
        카카오
      </div>
    //   <React.Fragment>
    //   <Container component="main" maxWidth="xs">
    //     <CssBaseline />
    //     <div className={classes.paper}>
    //       <Avatar className={classes.avatar}>
    //         <LockOutlinedIcon />
    //       </Avatar>
    //       <Typography component="h1" variant="h5">
    //         {회원가입}
    //       </Typography>

    //       <form className={classes.form} onSubmit={onSubmit}>
    //         <TextField
    //           variant="outlined"
    //           margin="normal"
    //           // required
    //           fullWidth
    //           label="이메일 주소"
    //           autoFocus

    //           autoComplete="uMail"
    //           name="uMail"
    //           onChange={onChange}
    //           value={form.uMail}
    //           disabled
    //         />
    //         <TextField
    //           variant="outlined"
    //           margin="normal"
    //           // required
    //           fullWidth
    //           label="비밀번호"

    //           autoComplete="current-password"
    //           name="password"
    //           type="password"
    //           onChange={onChange}
    //           value={form.password}
    //         />
    //         {
    //           type === 'register' ?
    //             <div>
    //               <TextField
    //                 variant="outlined"
    //                 margin="normal"
    //                 required
    //                 fullWidth
    //                 label="비밀번호 확인"

    //                 autoComplete="new-password"
    //                 name="passwordConfirm"
    //                 type="password"
    //                 onChange={onChange}
    //                 value={form.passwordConfirm}
    //               />
    //               <TextField
    //                 variant="outlined"
    //                 margin="normal"
    //                 required
    //                 fullWidth
    //                 label="닉네임"

    //                 autoComplete="uName"
    //                 name="uName"
    //                 onChange={onChange}
    //                 value={form.uName}
    //               />
    //               <TextField
    //                 variant="outlined"
    //                 margin="normal"
    //                 fullWidth
    //                 label="(선택) 관심있는 정당"

    //                 autoComplete="uParty"
    //                 name="uParty"
    //                 onChange={onChange}
    //                 value={form.uParty}
    //               />
    //             </div>
    //             : <div />
    //         }
    //         {error && <ErrorMessage>{error}</ErrorMessage>}
    //         <Button
    //           cyan fullWidth
    //           className={classes.submit}
    //           variant="contained"
    //           style={{ marginTop: '1rem', fontSize: '1rem' }}
    //         >
    //           {'회원가입'}
    //         </Button>
    //       </form>
    //     </div>
    //   </Container>
    // </React.Fragment>
    )
}

export default test;


// import React, { Component } from 'react';
// import Kakao from 'kakaojs';

// class KakaoLogin extends Component {


//     componentDidMount() {
//         console.log("hello-------");
//         if (Kakao.Auth == null) {
//             Kakao.init('dc342e3fecee26b6e0568c4b04fb1caa');
//         }
//         this.setState({ "kakao": Kakao })
//         console.log("Kakao state")
//         console.log(Kakao);
//         Kakao.Auth.createLoginButton({
//             container: '#kakao-login-btn',
//             success: function (authObj) {
//                 alert(JSON.stringify(authObj));
//             },
//             fail: function (err) {
//                 alert(JSON.stringify(err));
//             }
//         });
//     }

//     handleClickKakaoLogin() {
//         this.state.kakao.Auth.login({
//             success: (response) => {
//                 console.log("response 받음");
//                 console.log(response);
//             }, 
//             fail: function(err) {
//                 console.log("못받음");
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <a id="kakao-login-btn" href={"https://kauth.kakao.com/oauth/authorize?client_id=dc342e3fecee26b6e0568c4b04fb1caa&redirect_uri=http://70.12.247.60:8000/kakaologin&response_type=code"}/>
//             </div>
//         );
//     }

// }


// export default KakaoLogin;