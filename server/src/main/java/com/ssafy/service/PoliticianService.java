package com.ssafy.service;

import java.util.List;
import java.util.Map;

import com.ssafy.vo.Politician;



public interface PoliticianService {	

	List<Politician> findByName(String pName);
	List<Politician> findByParty(String pParty);
	List<Politician> findByConsitiuency(String pConsitiuency);
	List<Politician> findAll();
	List<Politician> searchPolitician(String input, String cate);
	Politician findById(int pId);
	List<Politician> getRandom();
	Map<String, Object> detailPolitician(int pId, String uMail);
}
