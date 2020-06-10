package com.ssafy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.repository.BillRepository;

@Service
public class BillServiceImpl {

	@Autowired
	private BillRepository billRepository;
}
