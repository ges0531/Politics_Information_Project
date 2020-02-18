package com.ssafy.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RouteController {
	
	@GetMapping("/")
	public String main() {
		return "index.html";
	}
	
	@GetMapping("/view/**")
	public String mappingUrl() {
		return "index.html";
	}
}
