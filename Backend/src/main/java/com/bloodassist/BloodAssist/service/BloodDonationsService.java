package com.bloodassist.BloodAssist.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bloodassist.BloodAssist.models.BloodDonations;
import com.bloodassist.BloodAssist.repository.BloodDonationsRepository;

@Service
public class BloodDonationsService {
	
	@Autowired
	private BloodDonationsRepository bloodDonationsRepository;
	
	public BloodDonations registerBloodDonations(BloodDonations bloodDonations) {
		return bloodDonationsRepository.save(bloodDonations);
	}
	
	public List<BloodDonations> findBloodDonationsBydonationDate(LocalDateTime donationDate) {
		return bloodDonationsRepository.findBydonationDate(donationDate);
	}
}
