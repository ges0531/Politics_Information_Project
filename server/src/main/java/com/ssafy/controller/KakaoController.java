package com.ssafy.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.service.kakaoAPI;

@RestController
public class KakaoController {

	@Autowired
	private kakaoAPI kakao;
	@RequestMapping(value="/kakaologin")
	public void login(@RequestParam("code") String code) {
		 String access_Token = kakao.getAccessToken(code);
		 HashMap<String, Object> userInfo = kakao.getUserInfo(access_Token);
		    System.out.println("login Controller : " + userInfo);
		    
		    //    클라이언트의 이메일이 존재할 때 세션에 해당 이메일과 토큰 등록
		   


		
	}
	
	@RequestMapping(value="/kakaologout")
	//매개변수로 엑세스 토큰 받아와야댐 
	public String logout() {
	    /*kakao.kakaoLogout((String)session.getAttribute("access_Token"));
	    session.removeAttribute("access_Token");
	    session.removeAttribute("userId");*/
	    return "index";
	}

}
