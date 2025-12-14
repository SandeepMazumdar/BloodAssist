package com.bloodassist.BloodAssist.models;

import java.time.LocalDateTime;
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
@Table(name = "bloodRequests")
public class BloodRequests {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long requestId;
	
	@Column(nullable = false)
	private String patientName;
	
	@Column(nullable = false)
	private String bloodComponent;
	
	@Column(nullable = false)
	private String bloodType;
	
	@SuppressWarnings("unused")
	private int quantity;
	
	@SuppressWarnings("unused")
	private String contactNumber;
	
	@SuppressWarnings("unused")
	private String urgencyLevel;
	
	@SuppressWarnings("unused")
	private LocalDateTime requestDate;
}
