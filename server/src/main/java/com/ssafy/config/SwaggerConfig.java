package com.ssafy.config;

import java.util.ArrayList;
import java.util.List;

import javax.swing.Spring;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.jsonwebtoken.lang.Arrays;
import io.swagger.annotations.AuthorizationScope;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.AuthorizationCodeGrantBuilder;
import springfox.documentation.builders.ParameterBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ApiKey;
import springfox.documentation.service.GrantType;
import springfox.documentation.service.Parameter;
import springfox.documentation.service.SecurityReference;
import springfox.documentation.service.SecurityScheme;
import springfox.documentation.service.TokenEndpoint;
import springfox.documentation.service.TokenRequestEndpoint;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.SecurityConfiguration;
import springfox.documentation.swagger.web.SecurityConfigurationBuilder;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
	
	
	private ApiInfo metadata() {
	//saffy
		return new ApiInfoBuilder().title("SSAFYyDang").description("SSAFY desc by swagger").version("2.0").build();
	}

	@Bean
	public Docket api() {
		ParameterBuilder aParameterBuilder = new ParameterBuilder();
        aParameterBuilder.name("jwt-auth-token")
                .description("JWT Token")
                .modelRef(new ModelRef("string"))
                .parameterType("header")
                .required(false)
                .build();
        List<Parameter> headerParams = new ArrayList<>();
        headerParams.add(aParameterBuilder.build());
        
		return new Docket(DocumentationType.SWAGGER_2).globalOperationParameters(headerParams).select().apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.any()).build().apiInfo(metadata());
	}
	
	



	
	}

