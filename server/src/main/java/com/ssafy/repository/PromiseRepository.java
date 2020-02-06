package com.ssafy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ssafy.vo.Promise;

@Repository
public interface PromiseRepository extends JpaRepository<Promise, Long> {

	
	@Query(value = "select * from promise pr where pr.p_id=?1", nativeQuery = true)
	List<Promise>  findByPoliticianId(int pId );

	@Query(value = "select * from promise where P_ID = :pId order by rand() limit 5;", nativeQuery = true)
	List<Promise>  findByPoliticianIdRandom(@Param("pId") int pId);
	//이름 수정
	
}

