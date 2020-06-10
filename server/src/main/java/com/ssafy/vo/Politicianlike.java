package com.ssafy.vo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Politicianlike {
	@Id
	private int bodLikeId;
	private int bodId;
	private String uMail;

	public Politicianlike(int bodLikeId, int bodId, String uMail) {
		super();
		this.bodLikeId = bodLikeId;
		this.bodId = bodId;
		this.uMail = uMail;
	}

	public Politicianlike() {
		super();
	}

	public int getBodLikeId() {
		return bodLikeId;
	}

	public void setBodLikeId(int bodLikeId) {
		this.bodLikeId = bodLikeId;
	}

	public int getBodId() {
		return bodId;
	}

	public void setBodId(int bodId) {
		this.bodId = bodId;
	}

	public String getuMail() {
		return uMail;
	}

	public void setuMail(String uMail) {
		this.uMail = uMail;
	}

	@Override
	public String toString() {
		return "Politicianlike [bodLikeId=" + bodLikeId + ", bodId=" + bodId + ", uMail=" + uMail + "]";
	}

}
