package com.bloodassist.BloodAssist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bloodassist.BloodAssist.models.BloodRequests;
import com.bloodassist.BloodAssist.repository.BloodRequestsRepository;

@Service
public class BloodRequestsService {
	
	@Autowired
	private BloodRequestsRepository bloodRequestsRepository;
	
	public BloodRequests registerBloodRequests(BloodRequests bloodRequests) {
		return bloodRequestsRepository.save(bloodRequests);
	}
	
	public List<BloodRequests> findBloodRequestsByurgencyLevel(String urgencyLevel) {
		return bloodRequestsRepository.findByurgencyLevel(urgencyLevel);
	}
}
