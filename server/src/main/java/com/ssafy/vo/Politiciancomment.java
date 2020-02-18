package com.ssafy.vo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Politiciancomment {

	@Id
	private int pCommentId;
	private int pId;
	private String uMail;
	private String uName;
	private String pCommentContent;
	private String writeDate;
	private String modifyDate;

	public Politiciancomment(int pCommentId, int pId, String uMail, String uName, String pCommentContent,
			String writeDate, String modifyDate) {
		super();
		this.pCommentId = pCommentId;
		this.pId = pId;
		this.uMail = uMail;
		this.uName = uName;
		this.pCommentContent = pCommentContent;
		this.writeDate = writeDate;
		this.modifyDate = modifyDate;
	}

	public Politiciancomment() {
		super();
	}

	public int getpCommentId() {
		return pCommentId;
	}

	public void setpCommentId(int pCommentId) {
		this.pCommentId = pCommentId;
	}

	public int getpId() {
		return pId;
	}

	public void setpId(int pId) {
		this.pId = pId;
	}

	public String getuMail() {
		return uMail;
	}

	public void setuMail(String uMail) {
		this.uMail = uMail;
	}

	public String getuName() {
		return uName;
	}

	public void setuName(String uName) {
		this.uName = uName;
	}

	public String getpCommentContent() {
		return pCommentContent;
	}

	public void setpCommentContent(String pCommentContent) {
		this.pCommentContent = pCommentContent;
	}

	public String getWriteDate() {
		return writeDate;
	}

	public void setWriteDate(String writeDate) {
		this.writeDate = writeDate;
	}

	public String getModifyDate() {
		return modifyDate;
	}

	public void setModifyDate(String modifyDate) {
		this.modifyDate = modifyDate;
	}

	@Override
	public String toString() {
		return "PoliticianComment [pCommentId=" + pCommentId + ", pId=" + pId + ", uMail=" + uMail + ", uName=" + uName
				+ ", pCommentContent=" + pCommentContent + ", writeDate=" + writeDate + ", modifyDate=" + modifyDate
				+ "]";
	}

}
