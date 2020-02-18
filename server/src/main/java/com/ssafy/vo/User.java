package com.ssafy.vo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
	@Id
	private String uMail;
	private String uPass;
	private String uName;
	private String uParty;
	private String kId;

	public User(String uMail, String uPass, String uName, String uParty, String kId) {
		super();
		this.uMail = uMail;
		this.uPass = uPass;
		this.uName = uName;
		this.uParty = uParty;
		this.kId = kId;
	}

	public User() {
		super();
	}

	public String getuMail() {
		return uMail;
	}

	public void setuMail(String uMail) {
		this.uMail = uMail;
	}

	public String getuPass() {
		return uPass;
	}

	public void setuPass(String uPass) {
		this.uPass = uPass;
	}

	public String getuName() {
		return uName;
	}

	public void setuName(String uName) {
		this.uName = uName;
	}

	public String getuParty() {
		return uParty;
	}

	public void setuParty(String uParty) {
		this.uParty = uParty;
	}

	public String getkId() {
		return kId;
	}

	public void setkId(String kId) {
		this.kId = kId;
	}

	@Override
	public String toString() {
		return "User [uMail=" + uMail + ", uPass=" + uPass + ", uName=" + uName + ", uParty=" + uParty + ", kId=" + kId
				+ "]";
	}

}
