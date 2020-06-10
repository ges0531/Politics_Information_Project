package com.ssafy.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ssafy.vo.Bill;

@Repository
public interface BillRepository extends JpaRepository<Bill,Long >{

	
	@Query(value = "select * from bill b where  b.b_politician like %?%1", nativeQuery = true)
	List<Bill>  findByPoliticianName(String pName);
	
}
