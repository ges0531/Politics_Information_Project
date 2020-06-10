package com.ssafy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ssafy.repository.UserRepository;
import com.ssafy.vo.User;
@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;

	@Override
	public User findById(String uId) {
		// TODO Auto-generated method stub
		
		
		return userRepository.findById(uId).get();
	}
	
	@Override
	public Boolean checkById(String uId) {
		// TODO Auto-generated method stub
		
		
		return userRepository.existsById(uId);
	}

	@Override
	public void deleteById(String uId) {
		// TODO Auto-generated method stub
		userRepository.deleteById(uId);
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateById(String uId, User user) {
		// TODO Auto-generated method stub
		userRepository.save(user);
	}

	@Override
	public User save(User user) {
		// TODO Auto-generated method stub
		
		return userRepository.save(user);
	}
	
	
}
