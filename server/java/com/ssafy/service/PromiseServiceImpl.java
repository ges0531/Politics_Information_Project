package com.ssafy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.repository.PromiseRepository;

@Service
public class PromiseServiceImpl {

	@Autowired
	private PromiseRepository promiseRepository;
}
