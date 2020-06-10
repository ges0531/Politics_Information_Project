package com.ssafy.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ssafy.vo.Politician;
import com.ssafy.vo.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

	@Query(value = "select * from user  where  k_id =  ?1", nativeQuery = true)
	User  findBykId(String kId);
	
	
}
