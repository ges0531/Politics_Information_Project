package com.ssafy.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.service.PromiseService;
import com.ssafy.vo.Promise;


@RestController
@RequestMapping("promise")
public class PromiseController {

	
	@Autowired
	private PromiseService promiseService;
	
	@GetMapping(value = "/{pId}")

	public ResponseEntity<List<Promise>> promiseBypId(@PathVariable("pId") int pId) {
		
		
		return new ResponseEntity<List<Promise>>(promiseService.findByPoliticianId(pId), HttpStatus.OK) ; 

	}

}
