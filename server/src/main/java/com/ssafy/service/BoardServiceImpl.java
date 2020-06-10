package com.ssafy.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.repository.BoardCommentRepository;
import com.ssafy.repository.BoardLikeRepository;
import com.ssafy.repository.BoardRepository;
import com.ssafy.vo.Board;
import com.ssafy.vo.Boardlike;

@Service
@Transactional
public class BoardServiceImpl implements BoardService {

	
	@Autowired
	BoardRepository bodRepository;
	
	@Autowired
	BoardCommentRepository bodCommentRepository;
	
	
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
		try {
			bodCommentRepository.deleteByBoardId(bodId);
			bodRepository.deleteById(bodId);
		} catch (RuntimeException e) {
			System.out.println(e);
		}
	}
	
	public void updateBod(Board bod) { 
		bodRepository.save(bod);
		
	}
	@Override
	public void plusLikeCnt(int bodId) {
		bodRepository.addLikeCnt(bodId);
	}
	@Override
	public void insertLikeBod(int bodId, String uMail) {
		Boardlike boardLike=new Boardlike(bodId,uMail);
		bodLikeRepository.save(boardLike);
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

	@Override
	public Board save(Board bod) {
		// TODO Auto-generated method stub
		return bodRepository.save(bod);
	}

	
}
