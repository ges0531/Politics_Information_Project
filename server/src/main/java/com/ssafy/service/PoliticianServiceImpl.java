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
	public List<Politician> findAll() {
		// TODO Auto-generated method stub
		return politicianRepository.findAll();
	}

	@Override
	public List<Politician> findByName(String pName) {
		// TODO Auto-generated method stub
		
		return politicianRepository.findByName(pName);
	}

	@Override
	public List<Politician> findByParty(String pParty) {
		// TODO Auto-generated method stub
		return politicianRepository.findByParty(pParty);
	}

	@Override
	public List<Politician> findByConsitiuency(String pConsitiuency) {
		// TODO Auto-generated method stub
		return politicianRepository.findByConsitiuency(pConsitiuency);
	}

	@Override
	public List<Politician> searchPolitician(String input, String cate) {
		// TODO Auto-generated method stub

		if (cate.equals("이름")) {
			System.out.println("이름진입");
			return findByName(input);
		} else if (cate.equals("정당")) {
			return findByParty(input);
		} else if (cate.equals("선거구")) {
			return findByConsitiuency(input);
		}
		
		return null;
	}
}
