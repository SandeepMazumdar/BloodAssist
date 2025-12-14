package com.bloodassist.BloodAssist.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bloodassist.BloodAssist.models.BloodInventory;

@Repository
public interface BloodInventoryRepository extends JpaRepository <BloodInventory, Long> {
	List<BloodInventory> findBybloodType(String bloodType);
}
