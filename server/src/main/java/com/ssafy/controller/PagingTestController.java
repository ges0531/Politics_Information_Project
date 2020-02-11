package com.ssafy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.service.PageTestService;
import com.ssafy.vo.Politician;

@RestController
@RequestMapping("/test")
public class PagingTestController {

	@Autowired
	PageTestService pageTestService;
	
	@GetMapping("/")
	ResponseEntity<Page<Politician>> getPoliticians(@RequestParam("pageNumber") int pageNumber, @RequestParam("pageSize") int pageSize) {
		return new ResponseEntity<Page<Politician>>(pageTestService.findAll(pageNumber, pageSize), HttpStatus.OK);
	}
}
