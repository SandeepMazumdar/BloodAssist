package com.bloodassist.BloodAssist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bloodassist.BloodAssist.models.BloodInventory;
import com.bloodassist.BloodAssist.repository.BloodInventoryRepository;

@Service
public class BloodInventoryService {
	
	@Autowired
	private BloodInventoryRepository bloodInventoryRepository;
	
	public BloodInventory registerBloodInventory(BloodInventory bloodInventory) {
		return bloodInventoryRepository.save(bloodInventory);
	}
	
	public List<BloodInventory> findBloodInventoryBybloodType(String bloodType) {
		return bloodInventoryRepository.findBybloodType(bloodType);
	}
}
