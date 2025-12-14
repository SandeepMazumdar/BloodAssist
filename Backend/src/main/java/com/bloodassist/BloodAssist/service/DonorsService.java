package com.bloodassist.BloodAssist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bloodassist.BloodAssist.models.Donors;
import com.bloodassist.BloodAssist.repository.DonorsRepository;

@Service
public class DonorsService {
	
	@Autowired
	private DonorsRepository donorsRepository;
	
	public Donors registerDonors(Donors donors) {
		return donorsRepository.save(donors);
	}
	
	public List<Donors> findDonorsBybloodType(String bloodType) {
		return donorsRepository.findBybloodType(bloodType);
	}
}
