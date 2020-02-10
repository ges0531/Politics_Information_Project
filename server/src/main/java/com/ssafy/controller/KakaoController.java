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
		    
		    //    카카오 아이디로 가입된 회원 조회 
		    
		    //   회원이 있을시 그 아이디 토큰 생성 + 넘기기 
		    	// 회원이 없을시 유저인포 정보와 회원없음 상태 전송     => 추가 입력 (이름,선호당) 받고  회원가입(다른컨트롤러에서 실행 )+토큰넘기기  
		    
		    
		   
		   


		
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
