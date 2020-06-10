package com.ssafy.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	@Autowired
	private JwtService jwtService;

	// 모든 유저 조회

	@GetMapping
	public ResponseEntity<List<User>> getAllUser() {

		List<User> userList = userService.findAll();

		return new ResponseEntity<List<User>>(userList, HttpStatus.OK);

	}

	// email 중복체크
	@GetMapping(value = "/{uMail}")
	public ResponseEntity<Boolean> duplicateCheckMail(@PathVariable("uMail") String uMail) {

		return new ResponseEntity<Boolean>(userService.checkByMail(uMail), HttpStatus.OK);

	}

	// 유저삭제

	@DeleteMapping

	public ResponseEntity<Void> deleteUser(@RequestBody User user) {
		HttpStatus status;
		try {
			userService.checkPass(user);
			userService.deleteById(user.getuMail());
			status = HttpStatus.OK;
		} catch (Exception e) {

			status = HttpStatus.NO_CONTENT;

		}
		return new ResponseEntity<Void>(status);

	}

	// userId로 사원 수정

	@PutMapping

	public ResponseEntity<Void> updateUser(@RequestBody User user) {

		userService.update(user);

		return new ResponseEntity<Void>(HttpStatus.OK);

	}

	// 사원 입력 회원가입

	@PostMapping(value = "/signUp")

	public ResponseEntity<Void> signUp(@RequestBody User user) {

		HttpStatus status=HttpStatus.OK;
		try {
			userService.save(user);
		}catch (Exception e) {
			status=HttpStatus.CONFLICT;
		}
		return new ResponseEntity<Void>(status);

	}

	@PostMapping(value = "/signIn")
	public ResponseEntity<Map<String, Object>> signIn(@RequestBody User user, HttpServletResponse res) {
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = null;
		try {
			// User user = new User(u.get("uMail"), map.get("uPass"), "", "","");
			User reqUser = userService.checkPass(user);

			res.setHeader("jwt-auth-token", jwtService.create(reqUser));

			resultMap = userService.makeSignInResultMap(reqUser, true);

			status = HttpStatus.ACCEPTED;

		} catch (Exception e) {
			resultMap.put("message", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;

		}
		return new ResponseEntity<Map<String, Object>>(resultMap, status);

	}

	@PostMapping(value = "/checkToken")
	public ResponseEntity<Map<String, Object>> checkToken(HttpServletRequest req) {
		try {
			Map<String, Object> map = new HashMap<String, Object>();
			System.out.println(jwtService.get(req.getHeader("jwt-auth-token")));

			return new ResponseEntity<Map<String, Object>>(map, HttpStatus.ACCEPTED);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;

	}

}
