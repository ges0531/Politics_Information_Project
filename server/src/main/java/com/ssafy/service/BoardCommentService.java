package com.ssafy.service;

import java.util.List;

import com.ssafy.vo.Boardcomment;

public interface BoardCommentService {

	void insertBodComment(Boardcomment bodComment);
	List<Boardcomment> selectAllBodCommentByBodId(int bodId);
	void deleteBodCommentByBodCommentId(int bodCommentId);
	void deleteBodCommentByBodId(int bodId);
	
	void modifyBodComment(Boardcomment bodComment);
}