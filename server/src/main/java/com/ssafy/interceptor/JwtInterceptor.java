package com.ssafy.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import com.ssafy.service.JwtService;


@Component

public class JwtInterceptor implements HandlerInterceptor{
	
	@Autowired
	private JwtService jwtService;
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		System.out.println(request.getMethod()+":" + request.getServletPath());
			if(request.getMethod().equals("OPTIONS")) {
				return true;
			} else {
				String token = request.getHeader("jwt-auth-token");
				if(token != null && token.length() > 0) {
					jwtService.checkValid(token);
					
					return true;
				} else {
					throw new RuntimeException("인증토큰이 없습니다. ");
				}
			}
	
	}

}
