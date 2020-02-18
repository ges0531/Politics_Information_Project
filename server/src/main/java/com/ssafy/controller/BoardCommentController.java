package com.ssafy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.service.BoardCommentService;
import com.ssafy.vo.Boardcomment;

@CrossOrigin("*")
@RestController
@RequestMapping("bcomment")
public class BoardCommentController {
	
	@Autowired
	BoardCommentService bService;
	
	@PostMapping
	public void post(Boardcomment bComment) {
		bService.insertBodComment(bComment);
	}

	@GetMapping(value = "/{bId}")
	public ResponseEntity<List<Boardcomment>> getAllCommentbyPId(@PathVariable("bId") int bId) {

		return new ResponseEntity<List<Boardcomment>>(bService.selectAllBodCommentByBodId(bId), HttpStatus.OK);

	}

	@DeleteMapping
	public void deletebComment(int bCommentId) {
		bService.deleteBodCommentByBodCommentId(bCommentId);
	}

	@PutMapping
	public void updatePComment(Boardcomment bComment) {
		bService.modifyBodComment(bComment);
	}
}
