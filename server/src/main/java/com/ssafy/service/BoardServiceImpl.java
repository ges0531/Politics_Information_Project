package com.ssafy.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.repository.BoardLikeRepository;
import com.ssafy.repository.BoardRepository;
import com.ssafy.vo.Board;

@Service
public class BoardServiceImpl implements BoardService {

	
	@Autowired
	BoardRepository bodRepository;
	
	@Autowired
	BoardLikeRepository bodLikeRepository;
	public void insertBod(Board bod) {
		// TODO Auto-generated method stub
		
		bodRepository.save(bod);
	}

	
	public List<Board> selectAllBod() {
		// TODO Auto-generated method stub
		return bodRepository.findAll();
	}

	
	public void deleteBod(int bodId) {
		// TODO Auto-generated method stub
		bodRepository.deleteById(bodId);
	}
	
	public void updateBod(Board bod) { 
		bodRepository.save(bod);
		
	}
	public void plusLikeCnt(int bodId) {
		
	}
	
	public void insertLikeBod(int bodId, String uMail) {
		
	}


	@Override
	public Board selectOne(int bodId) {
		// TODO Auto-generated method stub
		return bodRepository.findById(bodId).get();
	}


	@Override
	public Map<String,Object> readPost(int bodId,String uMail) {
		// TODO Auto-generated method stub
		Map<String, Object> map =new HashMap<String, Object>() ;
		try{
			map.put("likeFlag",bodLikeRepository.findLikeFlag(bodId, uMail));
		}catch(Exception e) {
			map.put("likeFlag", 0);
		}
		map.put("post", bodRepository.findById(bodId)) ;
		return map;
	}

	
}
