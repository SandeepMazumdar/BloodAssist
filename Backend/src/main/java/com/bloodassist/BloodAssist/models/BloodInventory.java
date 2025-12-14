package com.bloodassist.BloodAssist.models;

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
@Table(name = "bloodInventory")
public class BloodInventory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long inventoryId;
	
	@Column(nullable = false)
	private String bloodComponent;
	
	@Column(nullable = false)
	private String bloodType;
	
	@SuppressWarnings("unused")
	private int quantity;
	
	@SuppressWarnings("unused")
	private Date expiryDate;
	
	@SuppressWarnings("unused")
	private String storageLocation;
}
