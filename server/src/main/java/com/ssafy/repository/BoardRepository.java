package com.ssafy.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ssafy.vo.Board;

@Repository
public interface BoardRepository extends JpaRepository<Board,Integer > {
	 
	/* 객체 넘겨주는 방법 
	 * @Query(value="update User u set u.name = :#{#user.name} WHERE u.no = :#{#user.no}", nativeQuery=false)
	Integer update(@Param("user") User user );*/
	
		
	@Modifying(clearAutomatically = true)
	@Query(value=" UPDATE board SET like_count = like_count+1 WHERE bod_id = :bodId" , nativeQuery = true)
	void addLikeCnt(@Param("bodId") int bodId);
}
