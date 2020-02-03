package com.ssafy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.service.PoliticianService;
import com.ssafy.vo.Politician;

@RestController
@RequestMapping("politician")
public class PoliticianController {
	//정치인 검색  //정치인상세 //
	@Autowired
	private PoliticianService politicianService;
	
	@GetMapping
	public ResponseEntity<List<Politician>> getAllPolitician() {

		List<Politician> politicianList = politicianService.findAll();
		
		
		
		

		return new ResponseEntity<List<Politician>>(politicianList, HttpStatus.OK);

	}
}
