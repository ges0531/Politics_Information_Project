package com.ssafy.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.vo.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

	
	
}
