package com.ssafy.service;

import java.util.List;

import com.ssafy.vo.Bill;

public interface BillService {

	
	List<Bill> selectByPoliticianName(String pName);
}
