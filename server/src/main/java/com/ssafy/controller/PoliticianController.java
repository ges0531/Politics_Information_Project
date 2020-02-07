package com.ssafy.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.service.PoliticianService;
import com.ssafy.tool.TokenInfoManage;
import com.ssafy.vo.Politician;

@RestController
@RequestMapping("politician")
public class PoliticianController {
	// 정치인 검색 //정치인상세 //
	@Autowired
	private PoliticianService politicianService;
	
	@Autowired
	TokenInfoManage jwtManage;
	
	@GetMapping
	public ResponseEntity<Map<String, Object>> getAllPolitician(HttpServletRequest req) {
		Map<String, Object> resMap = new HashMap<String, Object>();
	
		
		String str = req.getHeader("jwt-auth-token");
		if(str!=null) {
			resMap.put("uMail", (String)jwtManage.getUserMail(str));
		}
		resMap.put("list",politicianService.findAll());
		
		
		
		return new ResponseEntity<Map<String, Object>>(resMap,HttpStatus.OK);

	}

	@GetMapping(value = "/{category}/{input}")
	public ResponseEntity<List<Politician>> searchPolitician(@PathVariable("input") String input,
			@PathVariable("category") String cate) {

		return new ResponseEntity<List<Politician>>(politicianService.searchPolitician(input, cate), HttpStatus.OK);

	}

	@GetMapping(value = "/{pid}")
	public ResponseEntity<Map<String, Object>> detailPolitician(@PathVariable("pid") int pId,HttpServletRequest req) {
		
		String token = req.getHeader("jwt-auth-token");
		Map<String, Object> resMap = new HashMap();

		
		if (token != null && token.length() > 0) {
			
			resMap.put("post", politicianService.detailPolitician(pId, (String)jwtManage.getUserMail(token)));
		} else {
			resMap.put("post", politicianService.detailPolitician(pId, "nonuser"));
		}
		return new ResponseEntity<Map<String, Object>>(resMap, HttpStatus.OK);

	}
	
	
	//좋아요 구현 

}
