package com.ssafy.controller;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
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
    public void sendEmailAction (@RequestParam("username") String USERNAME, @RequestParam("EMAIL") String EMAIL) throws Exception {
 
      
		System.out.println(USERNAME+EMAIL);
        String PASSWORD = "1111111111";
             
        try {
            MimeMessage msg = mailSender.createMimeMessage();
            MimeMessageHelper messageHelper = new MimeMessageHelper(msg, true, "UTF-8");
             
            messageHelper.setSubject(USERNAME+"님 비밀번호 찾기 메일입니다.");
            messageHelper.setText("비밀번호는 "+PASSWORD+" 입니다.");
            messageHelper.setTo(EMAIL);
            msg.setRecipients(MimeMessage.RecipientType.TO , InternetAddress.parse(EMAIL));
            mailSender.send(msg);
             
        }catch(MessagingException e) {
            System.out.println("MessagingException");
            e.printStackTrace();
        }
//        mv.setViewName("redirect:/emailSuccess");
       
       
    }
}
