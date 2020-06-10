package com.ssafy.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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
	public Boolean checkByMail(String uMail) {
		// TODO Auto-generated method stub
		
		
		return userRepository.existsById(uMail);
	}

	@Override
	public void deleteById(String uId) {
		// TODO Auto-generated method stub
		userRepository.deleteById(uId);
	}

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}

	@Override
	public void update(User user) {
		// TODO Auto-generated method stub
		userRepository.save(user);
	}

	@Override
	public User save(User user) {
		// TODO Auto-generated method stub
		
		return userRepository.save(user);
	}

	@Override
	public User checkPass(User user) {
		// TODO Auto-generated method stub
		
		Optional<User> output= userRepository.findById(user.getuMail());
		
		
		
		if(!output.isPresent()) {
			
			throw new RuntimeException("아이디 또는 비밀번호가 틀립니다");//아이디가 틀리다
		}else {
			User dbUser = output.get();
			if(dbUser.getuPass().equals(user.getuPass())) {
				
				return dbUser;
			}else {
				
				throw new RuntimeException("아이디 또는 비밀번호가 틀립니다"); //비밀번호가 틀리다

			}
			
		}
	}

	@Override
	public Map<String, Object> makeSignInResultMap(User user, boolean status) {
		// TODO Auto-generated method stub
		Map<String, Object> resultMap= new  HashMap<>();
		resultMap.put("status", status);
		resultMap.put("user", user);
		return resultMap;
	}

	@Override
	public User UserByKid(String kId) {
		// TODO Auto-generated method stub
	
		try {
			return userRepository.findBykId(kId);
			
		}catch (Exception e) {
			return null;
		}
		
	}

	@Override
	public Boolean checkUserByKid(String kId) {
		// TODO Auto-generated method stub
		
		User user = UserByKid(kId);
		if(user!=null) {
			return true;
		}else
			return false;
		
	}
	
	
}
