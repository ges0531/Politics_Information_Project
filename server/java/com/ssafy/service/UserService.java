package com.ssafy.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ssafy.vo.User;


public interface UserService {

	User findById(String uId);

	void deleteById(String uId);

	List<User> findAll();

	void updateById(String uId, User user);

	User save(User user);

	Boolean checkById(String uId);

}
