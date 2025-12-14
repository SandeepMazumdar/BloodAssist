package com.bloodassist.BloodAssist.models;

import java.time.LocalDateTime;
import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "donors")
public class Donors {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long donorId;
	
	@Column(nullable = false)
	private String name;
	
	@SuppressWarnings("unused")
	private Date dateOfBirth;
	
	@Column(nullable = false)
	private String bloodType;
	
	@SuppressWarnings("unused")
	private String contactNumber;
	
	@SuppressWarnings("unused")
	private LocalDateTime lastDonationDate;
	
	@SuppressWarnings("unused")
	private String medicalHistory;
}
