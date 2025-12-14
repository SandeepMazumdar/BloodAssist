package com.bloodassist.BloodAssist.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bloodassist.BloodAssist.models.BloodRequests;

@Repository
public interface BloodRequestsRepository extends JpaRepository <BloodRequests, Long> {
	List<BloodRequests> findByurgencyLevel(String urgencyLevel);
}
