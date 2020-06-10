package com.ssafy;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.ssafy.interceptor.JwtInterceptor;

@SpringBootApplication
public class SaffyOneApplication implements WebMvcConfigurer{
	
	
	public static void main(String[] args) {
		
		SpringApplication.run(SaffyOneApplication.class, args);
	}
	@Autowired
	private JwtInterceptor jwtInterceptor;
	
	public void addInterceptors(InterceptorRegistry registry) {
		 registry.addInterceptor(jwtInterceptor).addPathPatterns("/**")
												.excludePathPatterns(Arrays.asList("/**"));
		// 나중에 토큰 체크할 부분a
	}
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
		.allowedOrigins("*")
		.allowedMethods("*")
		.allowedHeaders("*")
		.exposedHeaders("jwt-auth-token");
	}
	
	

}
