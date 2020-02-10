package com.ssafy.service;

import java.util.List;

import com.ssafy.vo.Politiciancomment;

public interface PoliticianCommentService {
	
	void insertPoliticianComment(Politiciancomment pComment);
	List<Politiciancomment> selectAllPoliticianCommentByPId(int pId);
	void deletePoliticianCommentByPCommentId(int pCommentId);
	
	void modifyPoliticianComment(Politiciancomment bodComment);
}
