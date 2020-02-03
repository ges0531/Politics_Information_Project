package com.ssafy.vo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Politician {
	
	@Id
	private int pId;
	private String pName;
	private String pImg;
	private String pParty;
	private String pConstituency;
	private String pRepeat;
	private String pCommittee;
	private String pEducation;
	private String pCareer;
	private String pContact;
	private String pMail;
	public Politician(int pId, String pName, String pImg, String pParty, String pConstituency, String pRepeat,
			String pCommittee, String pEducation, String pCareer, String pContact, String pMail) {
		super();
		this.pId = pId;
		this.pName = pName;
		this.pImg = pImg;
		this.pParty = pParty;
		this.pConstituency = pConstituency;
		this.pRepeat = pRepeat;
		this.pCommittee = pCommittee;
		this.pEducation = pEducation;
		this.pCareer = pCareer;
		this.pContact = pContact;
		this.pMail = pMail;
	}
	public Politician() {
		super();
	}
	public int getpId() {
		return pId;
	}
	public void setpId(int pId) {
		this.pId = pId;
	}
	public String getpName() {
		return pName;
	}
	public void setpName(String pName) {
		this.pName = pName;
	}
	public String getpImg() {
		return pImg;
	}
	public void setpImg(String pImg) {
		this.pImg = pImg;
	}
	public String getpParty() {
		return pParty;
	}
	public void setpParty(String pParty) {
		this.pParty = pParty;
	}
	public String getpConstituency() {
		return pConstituency;
	}
	public void setpConstituency(String pConstituency) {
		this.pConstituency = pConstituency;
	}
	public String getpRepeat() {
		return pRepeat;
	}
	public void setpRepeat(String pRepeat) {
		this.pRepeat = pRepeat;
	}
	public String getpCommittee() {
		return pCommittee;
	}
	public void setpCommittee(String pCommittee) {
		this.pCommittee = pCommittee;
	}
	public String getpEducation() {
		return pEducation;
	}
	public void setpEducation(String pEducation) {
		this.pEducation = pEducation;
	}
	public String getpCareer() {
		return pCareer;
	}
	public void setpCareer(String pCareer) {
		this.pCareer = pCareer;
	}
	public String getpContact() {
		return pContact;
	}
	public void setpContact(String pContact) {
		this.pContact = pContact;
	}
	public String getpMail() {
		return pMail;
	}
	public void setpMail(String pMail) {
		this.pMail = pMail;
	}
	@Override
	public String toString() {
		return "Politician [pId=" + pId + ", pName=" + pName + ", pImg=" + pImg + ", pParty=" + pParty
				+ ", pConstituency=" + pConstituency + ", pRepeat=" + pRepeat + ", pCommittee=" + pCommittee
				+ ", pEducation=" + pEducation + ", pCareer=" + pCareer + ", pContact=" + pContact + ", pMail=" + pMail
				+ "]";
	}
	
	
	
}
