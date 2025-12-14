package com.bloodassist.BloodAssist.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bloodassist.BloodAssist.models.BloodDonations;

@Repository
public interface BloodDonationsRepository extends JpaRepository <BloodDonations, Long> {
	List<BloodDonations> findBydonationDate(LocalDateTime donationDate);
}
