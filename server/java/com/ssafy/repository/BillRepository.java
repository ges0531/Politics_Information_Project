package com.ssafy.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.ssafy.vo.Bill;

@Repository
public interface BillRepository extends JpaRepository<Bill,String >{

	
}
