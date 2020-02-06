package com.ssafy.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ssafy.vo.Boardlike;

@Repository
public interface BoardLikeRepository extends JpaRepository<Boardlike, Integer>{

	
	@Query(value = "select IFNULL(count(b.u_mail),0) from boardlike b where b.bod_id=:bId and b.u_mail= :uMail group by b.u_mail", nativeQuery = true)
	int  findLikeFlag(@Param("bId") int bId, @Param("uMail") String uMail);
}
