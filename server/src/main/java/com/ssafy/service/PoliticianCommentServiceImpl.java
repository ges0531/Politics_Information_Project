package com.ssafy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.repository.PoliticianCommentRepository;
import com.ssafy.vo.Politiciancomment;

@Service
public class PoliticianCommentServiceImpl implements PoliticianCommentService {

	@Autowired
	PoliticianCommentRepository politicianCommentRepository;
	
	@Override
	public void insertPoliticianComment(Politiciancomment pComment) {
		// TODO Auto-generated method stub
		politicianCommentRepository.save(pComment);
	}

	@Override
	public List<Politiciancomment> selectAllPoliticianCommentByPId(int pId) {
		// TODO Auto-generated method stub
		return politicianCommentRepository.findByPoliticianId(pId);
	}

	@Override
	public void deletePoliticianCommentByPCommentId(int pCommentId) {
		// TODO Auto-generated method stub
		politicianCommentRepository.deleteById(pCommentId);
	}

	@Override
	public void modifyPoliticianComment(Politiciancomment pComment) {
		// TODO Auto-generated method stub
		politicianCommentRepository.modifyPoliticianComment(pComment.getpCommentContent(), pComment.getpCommentId());
	}

}
