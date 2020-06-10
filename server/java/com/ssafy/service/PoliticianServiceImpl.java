package com.ssafy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.repository.PoliticianRepository;
import com.ssafy.vo.Politician;

@Service
public class PoliticianServiceImpl implements PoliticianService {

	@Autowired
	private PoliticianRepository politicianRepository;

	@Override
	public List<Politician> findById(String uId) {
		// TODO Auto-generated method stub
		return politicianRepository.findAll();
	}

	@Override
	public List<Politician> findAll() {
		// TODO Auto-generated method stub
		return politicianRepository.findAll();
	}
}
