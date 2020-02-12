
import React, { Component } from 'react';
import Kakao from 'kakaojs';

class KakaoLogin extends Component {


    componentDidMount() {
        console.log("hello-------");
        if (Kakao.Auth == null) {
            Kakao.init('dc342e3fecee26b6e0568c4b04fb1caa');
        }
        this.setState({ "kakao": Kakao })
        console.log("Kakao state")
        console.log(Kakao);
        Kakao.Auth.createLoginButton({
            container: '#kakao-login-btn',
            success: function (authObj) {
                alert(JSON.stringify(authObj));
            },
            fail: function (err) {
                alert(JSON.stringify(err));
            }
        });
    }

    handleClickKakaoLogin() {
        this.state.kakao.Auth.login({
            success: (response) => {
                console.log("response 받음");
                console.log(response);
            }, 
            fail: function(err) {
                console.log("못받음");
            }
        })
    }

    render() {
        return (
            <div>
                <a id="kakao-login-btn" href={"https://kauth.kakao.com/oauth/authorize?client_id=dc342e3fecee26b6e0568c4b04fb1caa&redirect_uri=http://70.12.246.50:3000/KakaoTest&response_type=code"}/>
            </div>
        );
    }

}


export default KakaoLogin;