package com.ssafy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ssafy.vo.Politiciancomment;

@Repository
public interface PoliticianCommentRepository extends JpaRepository<Politiciancomment,Integer > {

	@Modifying(clearAutomatically = true)
	@Query(value=" UPDATE politiciancomment SET p_comment_content = :content WHERE p_comment_id = :pCommentId" , nativeQuery = true)
	void modifyPoliticianComment(@Param("content") String content, @Param("pCommentId") int pCommentId);
	
	@Query(value = "select * from politiciancomment where p_id= :pId", nativeQuery = true)
	List<Politiciancomment>  findByPoliticianId(@Param("pId") int pId);
	
}
