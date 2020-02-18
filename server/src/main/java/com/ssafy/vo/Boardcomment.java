package com.ssafy.vo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Boardcomment {

	@Id
	private int bodCommentId;
	private int bodId;
	private String uMail;
	private String uName;
	private String bodCommentContent;
	private String writeDate;
	private String modifyDate;

	public Boardcomment(int bodCommentId, int bodId, String uMail, String uName, String bodCommentContent,
			String writeDate, String modifyDate) {
		super();
		this.bodCommentId = bodCommentId;
		this.bodId = bodId;
		this.uMail = uMail;
		this.uName = uName;
		this.bodCommentContent = bodCommentContent;
		this.writeDate = writeDate;
		this.modifyDate = modifyDate;
	}

	public Boardcomment() {
		super();
	}

	public int getBodCommentId() {
		return bodCommentId;
	}

	public void setBodCommentId(int bodCommentId) {
		this.bodCommentId = bodCommentId;
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

	public String getuName() {
		return uName;
	}

	public void setuName(String uName) {
		this.uName = uName;
	}

	public String getBodCommentContent() {
		return bodCommentContent;
	}

	public void setBodCommentContent(String bodCommentContent) {
		this.bodCommentContent = bodCommentContent;
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
		return "BoardComment [bodCommentId=" + bodCommentId + ", bodId=" + bodId + ", uMail=" + uMail + ", uName="
				+ uName + ", bodCommentContent=" + bodCommentContent + ", writeDate=" + writeDate + ", modifyDate="
				+ modifyDate + "]";
	}

}
