package com.ssafy.vo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Promise {
	
	@Id
	private int prId;
	private int pId;
	private String title;
	public Promise(int prId, int pId, String title) {
		super();
		this.prId = prId;
		this.pId = pId;
		this.title = title;
	}
	public Promise() {
		super();
	}
	public int getPrId() {
		return prId;
	}
	public void setPrId(int prId) {
		this.prId = prId;
	}
	public int getpId() {
		return pId;
	}
	public void setpId(int pId) {
		this.pId = pId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	@Override
	public String toString() {
		return "Promise [prId=" + prId + ", pId=" + pId + ", title=" + title + "]";
	}
	
	
}
