package com.ssafy.service;

import java.util.List;

import com.ssafy.vo.Politician;



public interface PoliticianService {

	List<Politician> findById(String uId);

	

	List<Politician> findAll();
}
