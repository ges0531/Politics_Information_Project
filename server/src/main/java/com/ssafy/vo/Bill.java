package com.ssafy.vo;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Bill {

	@Id
	private int bId;
	private String bName;
	private String bNumber;
	private String bKind;
	private String bOfferdate;
	private String bPolitician;
	private String bSession;
	private String bContent;
	private String bStage;
	private String bDecidedate;
	private String bResult;

	public Bill(int bId, String bName, String bNumber, String bKind, String bOfferdate, String bPolitician,
			String bSession, String bContent, String bStage, String bDecidedate, String bResult) {
		super();
		this.bId = bId;
		this.bName = bName;
		this.bNumber = bNumber;
		this.bKind = bKind;
		this.bOfferdate = bOfferdate;
		this.bPolitician = bPolitician;
		this.bSession = bSession;
		this.bContent = bContent;
		this.bStage = bStage;
		this.bDecidedate = bDecidedate;
		this.bResult = bResult;
	}

	public Bill() {
		super();
	}

	public int getbId() {
		return bId;
	}

	public void setbId(int bId) {
		this.bId = bId;
	}

	public String getbName() {
		return bName;
	}

	public void setbName(String bName) {
		this.bName = bName;
	}

	public String getbNumber() {
		return bNumber;
	}

	public void setbNumber(String bNumber) {
		this.bNumber = bNumber;
	}

	public String getbKind() {
		return bKind;
	}

	public void setbKind(String bKind) {
		this.bKind = bKind;
	}

	public String getbOfferdate() {
		return bOfferdate;
	}

	public void setbOfferdate(String bOfferdate) {
		this.bOfferdate = bOfferdate;
	}

	public String getbPolitician() {
		return bPolitician;
	}

	public void setbPolitician(String bPolitician) {
		this.bPolitician = bPolitician;
	}

	public String getbSession() {
		return bSession;
	}

	public void setbSession(String bSession) {
		this.bSession = bSession;
	}

	public String getbContent() {
		return bContent;
	}

	public void setbContent(String bContent) {
		this.bContent = bContent;
	}

	public String getbStage() {
		return bStage;
	}

	public void setbStage(String bStage) {
		this.bStage = bStage;
	}

	public String getbDecidedate() {
		return bDecidedate;
	}

	public void setbDecidedate(String bDecidedate) {
		this.bDecidedate = bDecidedate;
	}

	public String getbResult() {
		return bResult;
	}

	public void setbResult(String bResult) {
		this.bResult = bResult;
	}

	@Override
	public String toString() {
		return "Bill [bId=" + bId + ", bName=" + bName + ", bNumber=" + bNumber + ", bKind=" + bKind + ", bOfferdate="
				+ bOfferdate + ", bPolitician=" + bPolitician + ", bSession=" + bSession + ", bContent=" + bContent
				+ ", bStage=" + bStage + ", bDecidedate=" + bDecidedate + ", bResult=" + bResult + "]";
	}

}
