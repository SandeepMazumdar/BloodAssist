package com.bloodassist.BloodAssist.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bloodassist.BloodAssist.models.Donors;

@Repository
public interface DonorsRepository extends JpaRepository <Donors, Long> {
	List<Donors> findBybloodType(String bloodType);
}
