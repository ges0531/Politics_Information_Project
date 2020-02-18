package com.ssafy.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

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

import com.ssafy.service.PoliticianCommentService;
import com.ssafy.vo.Politiciancomment;

@RestController
@CrossOrigin("*")
@RequestMapping("pcomment")
public class PoliticianCommentController {

	@Autowired
	PoliticianCommentService pService;
	
	@PostMapping
	public void post(Politiciancomment pComment) {
		pService.insertPoliticianComment(pComment);
	}

	@GetMapping(value = "/{pId}")
	public ResponseEntity<List<Politiciancomment>> getAllCommentbyPId(@PathVariable("pId") int pId) {

		return new ResponseEntity<List<Politiciancomment>>(pService.selectAllPoliticianCommentByPId(pId), HttpStatus.OK);

	}

	@DeleteMapping
	public void deletePComment(int pCommentId) {
		pService.deletePoliticianCommentByPCommentId(pCommentId);
	}

	@PutMapping
	public void updatePComment(Politiciancomment pComment) {
		pService.modifyPoliticianComment(pComment);
	}
}
