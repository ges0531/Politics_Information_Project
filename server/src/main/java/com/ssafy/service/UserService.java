package com.ssafy.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.ssafy.vo.User;


public interface UserService {

	User findById(String uId);

	void deleteById(String uId);

	List<User> findAll();

	void update(User user);

	User save(User user);

	Boolean checkByMail(String uMail);
	
	User checkPass(User user);
	Map<String, Object> makeSignInResultMap(User user,boolean status);
	
	User UserByKid(String kId);
	Boolean checkUserByKid(String kId);

}
