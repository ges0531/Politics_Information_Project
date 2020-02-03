package com.ssafy.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.service.BoardService;
import com.ssafy.service.JwtService;
import com.ssafy.vo.Board;
import com.ssafy.vo.User;

@RestController
@RequestMapping("bod")
public class BoardController {

	@Autowired
	BoardService bodService;
	@Autowired
	JwtService jwtService;
	@PostMapping
	public void post (Board bod) {
		bodService.insertBod(bod);
	}
	@GetMapping
	public ResponseEntity<List<Board>>  readAll() {
		
		return new ResponseEntity<List<Board>>(bodService.selectAllBod(),HttpStatus.OK);
		
	}
	
	@DeleteMapping
	public void deletePost(int bodId) {
		bodService.deleteBod(bodId);
	}
	
	@GetMapping(value="/{bodId}")
	public ResponseEntity<Map<String,Object>> readPost(@PathVariable("bodId") int bodId,  String token, HttpServletRequest req) {
		//gethaeder
		//String token=req.getHeader("jwt-auth-token");
		//if(token.isEmpty()){
		//Map<String, Object> map=jwtService.get(req.getHeader("jwt-auth-token")) 헤더에서 뽑을경우 
		Map<String, Object> map= jwtService.get(token);
		
		String str;
		
		map=(Map<String, Object>) map.get("User");
		
		Map<String, Object> resMap=new HashMap();
		resMap.put("post", bodService.readPost(bodId, (String)map.get("uMail"))) ;
		
		return new ResponseEntity<Map<String,Object>>(resMap,HttpStatus.OK);
		
	}

	
	
}
