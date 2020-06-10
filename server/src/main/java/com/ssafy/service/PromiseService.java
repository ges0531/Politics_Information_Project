package com.ssafy.service;

import java.util.List;

import com.ssafy.vo.Promise;

public interface PromiseService {

	
	List<Promise> findByPoliticianId(int pId);
	List<Promise> findByPoliticianIdRandom(int pId);
}
