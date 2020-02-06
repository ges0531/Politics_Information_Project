package com.ssafy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.repository.PromiseRepository;
import com.ssafy.vo.Promise;

@Service
public class PromiseServiceImpl implements PromiseService {

	@Autowired
	private PromiseRepository promiseRepository;

	@Override
	public List<Promise> findByPoliticianId(int pId) {
		// TODO Auto-generated method stub
		return promiseRepository.findByPoliticianId(pId);
	}
}
