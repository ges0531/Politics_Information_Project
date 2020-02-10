package com.ssafy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ssafy.vo.Boardcomment;

@Repository
public interface BoardCommentRepository extends JpaRepository<Boardcomment,Integer >  {
	
	@Modifying(clearAutomatically = true)
	@Query(value=" UPDATE boardcomment SET bod_comment_content = :content WHERE bod_comment_id = :bCommentId" , nativeQuery = true)
	void modifyBoardComment(@Param("content") String content, @Param("bCommentId") int bCommentId);	
	
	@Query(value = "select * from boardcomment where bod_id= :bodId", nativeQuery = true)
	List<Boardcomment>  findByBoardId(@Param("bodId") int bodId);
	
	@Query(value = "delete from boardcomment where bod_id= :bodId", nativeQuery = true)
	void deleteByBoardId(@Param("bodId") int bodId);
}
