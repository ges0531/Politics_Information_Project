package com.ssafy.vo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Board {

	@Id
	private int bodId;
	private String uMail;
	private String title;
	private String content;
	private String writeDate;
	private String modifyDate;
	private int likeCount;
	private String uName;

	public Board(int bodId, String uMail, String title, String content, String writeDate, String modifyDate,
			int likeCount, String uName) {
		super();
		this.bodId = bodId;
		this.uMail = uMail;
		this.title = title;
		this.content = content;
		this.writeDate = writeDate;
		this.modifyDate = modifyDate;
		this.likeCount = likeCount;
		this.uName = uName;
	}

	public Board() {
		super();
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
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

	public int getLikeCount() {
		return likeCount;
	}

	public void setLikeCount(int likeCount) {
		this.likeCount = likeCount;
	}

	public String getuName() {
		return uName;
	}

	public void setuName(String uName) {
		this.uName = uName;
	}

	@Override
	public String toString() {
		return "Board [bodId=" + bodId + ", uMail=" + uMail + ", title=" + title + ", content=" + content
				+ ", writeDate=" + writeDate + ", modifyDate=" + modifyDate + ", likeCount=" + likeCount + ", uName="
				+ uName + "]";
	}

}
