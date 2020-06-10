package com.ssafy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.service.BillService;
import com.ssafy.vo.Bill;

@RestController
@RequestMapping("bill")
public class BillController {

	@Autowired
	private BillService billService;
	//의안 검색(,)  //의원이 발의한 의안  // 의안상세//
	
	@GetMapping(value="/{pName}")
	ResponseEntity<List<Bill>> getBillBypName(@PathVariable("pName") String pName){
		
		
		return new ResponseEntity<List<Bill>>( billService.selectByPoliticianName(pName),HttpStatus.OK);
	}
}
