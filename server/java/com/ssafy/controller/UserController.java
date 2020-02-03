package com.ssafy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.ssafy.repository.UserRepository;
import com.ssafy.service.JwtService;
import com.ssafy.service.UserService;
import com.ssafy.vo.User;

@RestController
@RequestMapping("user")
public class UserController {
	@Autowired
	private UserService userService;
	private JwtService jwtService;

	// 모든 유저 조회

	@GetMapping
	public ResponseEntity<List<User>> getAllUser() {

		List<User> userList = userService.findAll();

		return new ResponseEntity<List<User>>(userList, HttpStatus.OK);

	}

	// eMail로 한명의 유저 조회 (중복체크)
	@GetMapping(value = "/{uId}")

	public Boolean checkMail(@PathVariable("uId") String uId) {
		
		//User user = new ResponseEntity<User>(userService.findById(uId), HttpStatus.OK).;
		
		return userService.checkById(uId);

	}

	// 유저 Id로 사원 삭제

	@DeleteMapping(value = "/{uId}")

	public ResponseEntity<Void> deleteUser(@PathVariable("uId") String uId) {

		userService.deleteById(uId);

		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);

	}

	// userId로 사원 수정

	@PutMapping(value = "/{uId}")

	public ResponseEntity<User> updateUser(@PathVariable("uId") String uId, @RequestBody User user) {

		userService.updateById(uId, user);

		return new ResponseEntity<User>(user, HttpStatus.OK);

	}

	// 사원 입력 회원가입 

	@PostMapping(value = "/SignUP")

	public ResponseEntity<User> signUp(@RequestBody User user) {

		return new ResponseEntity<User>(userService.save(user), HttpStatus.OK);

	}
	
	@PostMapping(value = "/SignIn")

	public Boolean login(@RequestBody User user) {
		
		User userr = userService.findById(user.getuMail());
		
		if (userr.getuPass().equals(user.getuPass()))
			return true;
		
		else
			return false;
	
		
		//return new ResponseEntity<User>(userService.save(user), HttpStatus.OK);

	}

	/*// 급여를 기준으로 사원 검색 (sal > sal1 and sal < sal2)

	@GetMapping(value = "/{sal1}/{sal2}")

	public ResponseEntity<List<Emp>> getEmpBySalBetween(@PathVariable int sal1, @PathVariable int sal2) {

		List<Emp> emps = empService.findBySalBetween(sal1, sal2);

		return new ResponseEntity<List<Emp>>(emps, HttpStatus.OK);

	}*/

	

	/*@RequestMapping(value = "/user", method = RequestMethod.POST)
	public String signUpUser() {
		User user = new User();
		user.setuId("a");
		user.setuMail("a");
		user.setuPass("a");
		user.setuParty("a");
		userRepository.save(user);
		return "Hello world";
	}

	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public ResponseEntity<User> signInUser() {
		User user = new User();
		user.setuId("a");
		user.setuMail("a");
		user.setuPass("a");
		user.setuParty("a");

		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	*/
}
