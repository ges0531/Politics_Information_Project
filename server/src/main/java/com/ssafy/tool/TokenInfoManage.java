package com.ssafy.tool;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.service.JwtService;

@Service
public class TokenInfoManage {

	@Autowired
	JwtService jwtService;

	public String getUserMail(String token) {
		Map<String, Object> map = jwtService.get(token);

		map = (Map<String, Object>) map.get("User");
		return (String)map.get("uMail");
	}
}
