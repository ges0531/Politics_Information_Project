package com.ssafy.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.vo.Board;

@Repository
public interface BoardRepository extends JpaRepository<Board,Integer > {
	 
	

}
