package com.ssafy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.repository.BillRepository;
import com.ssafy.vo.Bill;

@Service
public class BillServiceImpl implements BillService {

	@Autowired
	private BillRepository billRepository;

	@Override
	public List<Bill> selectByPoliticianName(String pName) {
		// TODO Auto-generated method stub
		return billRepository.findByPoliticianName(pName);
	}
}
