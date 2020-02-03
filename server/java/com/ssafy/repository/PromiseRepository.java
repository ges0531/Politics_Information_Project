package com.ssafy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.vo.Promise;

@Repository
public interface PromiseRepository extends JpaRepository<Promise, String> {

}
