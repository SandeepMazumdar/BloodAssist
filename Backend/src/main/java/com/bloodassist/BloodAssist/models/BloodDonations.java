package com.bloodassist.BloodAssist.models;

import java.time.LocalDateTime;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "bloodDonations")
public class BloodDonations {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long donationId;
	
	@ManyToOne
    @JoinColumn(name = "donorId", nullable = false)
	private Donors donorId;
	
	@SuppressWarnings("unused")
	private LocalDateTime donationDate;
	
	@Column(nullable = false)
	private String bloodComponent;
	
	@Column(nullable = false)
	private String bloodType;
	
	@SuppressWarnings("unused")
	private int quantity;
}
