package com.ssafy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ssafy.vo.Politician;

@Repository
public interface PoliticianRepository extends JpaRepository<Politician,Long > {
	
	
	@Query(value = "select * from politician  where  p_name like %?%1", nativeQuery = true)
	List<Politician>  findByName(String pName);
	@Query(value = "select * from politician p where  p.p_party like %:pParty%", nativeQuery = true)
	List<Politician>  findByParty(@Param("pParty") String pParty);
	@Query(value = "select * from politician p where  p.p_consitiuency like %:pConsitiuency%", nativeQuery = true)
	List<Politician>  findByConsitiuency(@Param("pConsitiuency") String pConsitiuency);
	@Query(value = "select * from politician where p_id = :pId", nativeQuery = true)
	Politician findById(@Param("pId") int pId);
	@Query(value = "select b.* from promise as a left join politician as b on a.P_ID = b.P_ID where P_PARTY = :pParty order by rand() limit :random", nativeQuery = true)
	List<Politician> findRandom(@Param("pParty")String pParty, @Param("random")int random);
}
