package com.ssafy.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.service.PoliticianService;
import com.ssafy.service.PromiseService;
import com.ssafy.vo.Politician;
import com.ssafy.vo.Promise;

@RestController
@RequestMapping("cardgame")
public class CardGameController {
	
	@Autowired
	PoliticianService politicianService;
	@Autowired
	PromiseService promiseService;
	
	@GetMapping("/")
	public ResponseEntity<Map<String, List>> getRandomPromise() {
		List<Politician> politicians = politicianService.getRandom();
		List<Promise> promises = new ArrayList<Promise>();
		politicians.forEach(p -> {
			promises.addAll(promiseService.findByPoliticianIdRandom(p.getpId()));
		});
		HashMap<String, List> map = new HashMap<>();
		map.put("politicians", politicians);
		map.put("promises", promises);
		return new ResponseEntity<Map<String, List>>(map, HttpStatus.OK);
	}

}
