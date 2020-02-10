package com.ssafy.service;

import java.util.List;
import java.util.Map;

import com.ssafy.vo.Board;

public interface BoardService {
	
	
	//INSERT SELECT DELETE 좋아요테이블 SELECT , 
	
	
	void insertBod(Board bod) ;
	List<Board> selectAllBod();
	void deleteBod(int bodId);
	Board selectOne(int bodId);
	Map<String,Object> readPost(int bodId,String token);
	public void plusLikeCnt(int bodId) ;
	public void insertLikeBod(int bodId, String uMail);	
	public Board save(Board bod);
	
	
}
