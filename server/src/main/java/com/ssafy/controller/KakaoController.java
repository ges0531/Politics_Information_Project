package com.ssafy.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ssafy.service.JwtService;
import com.ssafy.service.UserService;
import com.ssafy.service.kakaoAPI;
import com.ssafy.vo.User;

@CrossOrigin("*")
@RestController
public class KakaoController {

	@Autowired
	private UserService userService;
	@Autowired
	private JwtService jwtService;
	@Autowired
	private kakaoAPI kakao;

	@GetMapping(value = "/kakaologin")
	public ResponseEntity<Map<String, Object>> login(@RequestParam("code") String code, HttpServletResponse res) {
		/*
		 * public r login(@RequestParam("code") String code, HttpServletResponse res,
		 * RedirectAttributes redirectAttributes)
		 */

		// redirectAttributes.addAttribute("test", "test");
		// redirectAttributes.addFlashAttribute("test", "test");

		System.out.println("진입");
		System.out.println(code);
		String access_Token = kakao.getAccessToken(code);
		HashMap<String, Object> userInfo = kakao.getUserInfo(access_Token);
		String kId = (String) Integer.toString((int) userInfo.get("id"));
		String uMail = (String) userInfo.get("email");
		System.out.println("kId=" + kId);
		System.out.println("uMail=" + uMail);
		System.out.println("login Controller : " + userInfo);

		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = null;

		try {

			if (userService.checkUserByKid(kId)) {
				// 카카오 로그인 id 가 있을경우
				System.out.println("1");
				User reqUser = userService.UserByKid(kId);

				res.setHeader("jwt-auth-token", jwtService.create(reqUser));

				resultMap = userService.makeSignInResultMap(reqUser, true);

				status = HttpStatus.ACCEPTED;

			} else {
				System.out.println("2");
				if (userService.checkByMail(uMail)) {
					// 카카오 로그인 id가 없지만 기존 회원아이디가 있을경우
					System.out.println("2.5");
					User reqUser = userService.findById(uMail);
					reqUser.setkId(kId);
					userService.save(reqUser);

					res.setHeader("jwt-auth-token", jwtService.create(reqUser));

					resultMap = userService.makeSignInResultMap(reqUser, true);

					status = HttpStatus.ACCEPTED;
				} else {
					System.out.println("3");
					// 카카오 로그인 id 도 없고 기존 회원 id 도 없을경우
					resultMap.put("kId", kId);
					resultMap.put("uMail", uMail);
					resultMap.put("message",
							"회원가입창을 띄워주시고 재요청시 /kakaosignup 으로요청 바라며  kId와 uMail 을  User DTO와 합쳐서 요청 주세요 ");
					status = HttpStatus.OK;

				}

			}

		} catch (Exception e) {
			resultMap.put("message", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;

		}

		return new ResponseEntity<Map<String, Object>>(resultMap, status);

	}

	@PostMapping(value = "/kakaologout")
	// 매개변수로 엑세스 토큰 받아와야댐
	public String logout() {
		System.out.println("logout");
		/*
		 * kakao.kakaoLogout((String)session.getAttribute("access_Token"));
		 * session.removeAttribute("access_Token"); session.removeAttribute("userId");
		 */
		return "index";
	}

	@PostMapping(value = "/kakaosignup")
	// 매개변수로 엑세스 토큰 받아와야댐
	public ResponseEntity<Map<String, Object>> signUp(User user, HttpServletResponse res) {
		userService.save(user);
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = null;

		try {
			User reqUser = userService.UserByKid(user.getkId());

			res.setHeader("jwt-auth-token", jwtService.create(reqUser));

			resultMap = userService.makeSignInResultMap(reqUser, true);

			status = HttpStatus.ACCEPTED;

		} catch (Exception e) {
			resultMap.put("message", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}

		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}

}
