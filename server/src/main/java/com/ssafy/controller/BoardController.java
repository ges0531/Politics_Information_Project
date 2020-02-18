package com.ssafy.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.service.BoardService;
import com.ssafy.service.JwtService;
import com.ssafy.tool.PageRequest;
import com.ssafy.vo.Board;
import com.ssafy.vo.User;

@RestController
@RequestMapping("bod")
public class BoardController {

	@Autowired
	BoardService bodService;
	@Autowired
	JwtService jwtService;

	@PostMapping
	public ResponseEntity<Board> post(Board bod) {

		return new ResponseEntity<Board>(bodService.save(bod), HttpStatus.OK);
	}

	@GetMapping
	public ResponseEntity<List<Board>> readAll() {

		return new ResponseEntity<List<Board>>(bodService.selectAllBod(), HttpStatus.OK);

	}

	@DeleteMapping
	public void deletePost(int bodId) {
		bodService.deleteBod(bodId);
	}

	@GetMapping(value = "/{bodId}")
	public ResponseEntity<Map<String, Object>> readPost(@PathVariable("bodId") int bodId, HttpServletRequest req) {

		String token = req.getHeader("jwt-auth-token");
		Map<String, Object> resMap = new HashMap();

		Map<String, Object> map = null;
		if (token != null && token.length() > 0) {
			map = jwtService.get(token);
			map = (Map<String, Object>) map.get("User");
			resMap.put("post", bodService.readPost(bodId, (String) map.get("uMail")));
		} else {
			resMap.put("post", bodService.readPost(bodId, "nonuser"));
		}

		return new ResponseEntity<Map<String, Object>>(resMap, HttpStatus.OK);

	}

	@PostMapping(value = "/{bodId}/{uMail}")
	public ResponseEntity<Void> likeBod(@PathVariable("bodId") int bodId, @PathVariable("uMail") String uMail) {
		Board bod = bodService.selectOne(bodId);
		if (bod.getuMail().equals(uMail)) {
			return new ResponseEntity<Void>(HttpStatus.NOT_ACCEPTABLE);
		}
		bodService.plusLikeCnt(bodId);
		bodService.insertLikeBod(bodId, uMail);

		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	/*
	 * @GetMapping("accounts") public Page<Board .Res> getAccounts(final PageRequest
	 * pageable) { return
	 * accountService.findAll(pageable.of()).map(AccountDto.Res::new); }
	 */

}
