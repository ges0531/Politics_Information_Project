package com.ssafy.controller;

import java.util.HashMap;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MailController {
	@Autowired
	private JavaMailSender mailSender;
	
	
	
	@GetMapping(value="/googoo")
    public ResponseEntity<Map<String,Object>> sendEmailAction ( @RequestParam("EMAIL") String EMAIL) {
		
		double random=Math.random();
		int confirm = (int)(random*9999)+1000;
		Map<String, Object> resMap= new HashMap <String, Object>();
		//System.out.println(EMAIL);
		HttpStatus status=null;
             
        try {
            MimeMessage msg = mailSender.createMimeMessage();
            MimeMessageHelper messageHelper = new MimeMessageHelper(msg, true, "UTF-8");
             
            messageHelper.setSubject("email 인증");
            messageHelper.setText("인증번호는 "+confirm+" 입니다.");
            messageHelper.setTo(EMAIL);
            msg.setRecipients(MimeMessage.RecipientType.TO , InternetAddress.parse(EMAIL));
            mailSender.send(msg);
            resMap.put("confirm",confirm );
            status = HttpStatus.OK;
        }catch(Exception e) {
            System.out.println(e.getMessage());
            resMap.put("msg", "메시지 익셉션");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
//        mv.setViewName("redirect:/emailSuccess");
       
     return new ResponseEntity<Map<String,Object>>(resMap,status)  ;
    }
}
