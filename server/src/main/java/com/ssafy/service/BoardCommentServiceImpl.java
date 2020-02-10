package com.ssafy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.repository.BoardCommentRepository;
import com.ssafy.vo.Boardcomment;

@Service
public class BoardCommentServiceImpl implements BoardCommentService {

	@Autowired
	BoardCommentRepository boardCommentRepository;
	
	@Override
	public void insertBodComment(Boardcomment bodComment) {
		// TODO Auto-generated method stub
		boardCommentRepository.save(bodComment);
	}

	@Override
	public List<Boardcomment> selectAllBodCommentByBodId(int bodId) {
		// TODO Auto-generated method stub
		return boardCommentRepository.findByBoardId(bodId);
	}

	@Override
	public void deleteBodCommentByBodCommentId(int bodCommentId) {
		// TODO Auto-generated method stub
		boardCommentRepository.deleteById(bodCommentId);
	}

	@Override
	public void deleteBodCommentByBodId(int bodId) {
		// TODO Auto-generated method stub
		boardCommentRepository.deleteByBoardId(bodId);
	}

	@Override
	public void modifyBodComment(Boardcomment bodComment) {
		// TODO Auto-generated method stub
		boardCommentRepository.modifyBoardComment(bodComment.getBodCommentContent(), bodComment.getBodCommentId());
	}

}
