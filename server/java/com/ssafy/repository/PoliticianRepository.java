package com.ssafy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.vo.Politician;

@Repository
public interface PoliticianRepository extends JpaRepository<Politician,Long > {
	

}
