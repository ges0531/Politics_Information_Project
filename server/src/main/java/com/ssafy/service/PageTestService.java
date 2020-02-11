package com.ssafy.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.ssafy.repository.PoliticianRepository;
import com.ssafy.vo.Politician;
import com.ssafy.vo.Promise;

@Service
public class PageTestService {

	@Autowired
	private PoliticianRepository politicianRepository;

	public Page<Politician> findAll(int pageNumber, int pageSize) {
		// TODO Auto-generated method stub
		PageRequest pageRequest = PageRequest.of(pageNumber, pageSize);
		return politicianRepository.findAll(pageRequest);
	}

}
