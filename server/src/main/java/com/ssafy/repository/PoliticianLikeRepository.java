package com.ssafy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ssafy.vo.Politicianlike;

@Repository
public interface PoliticianLikeRepository  extends JpaRepository<Politicianlike, Integer>{
	
	@Query(value = "select IFNULL(count(b.u_mail),0) from politicianlike p where p.p_id=:pId and b.u_mail= :uMail group by p.u_mail", nativeQuery = true)
	int  findLikeFlag(@Param("pId") int pId, @Param("uMail") String uMail);

}
