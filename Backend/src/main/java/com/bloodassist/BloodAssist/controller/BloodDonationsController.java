package com.bloodassist.BloodAssist.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bloodassist.BloodAssist.models.BloodDonations;
import com.bloodassist.BloodAssist.service.BloodDonationsService;

@RestController
@RequestMapping("/blooddonations")
public class BloodDonationsController {
	
	@Autowired
    private BloodDonationsService blooddonationsService;
	
	@PostMapping("/register-blooddonations")
    public BloodDonations registerBloodDonations(@RequestBody BloodDonations blooddonations) {
        return blooddonationsService.registerBloodDonations(blooddonations);
    }
	
	@GetMapping("/by-donationDate/{donationDate}")
    public List<BloodDonations> findBloodDonationsBydonationDate(@PathVariable LocalDateTime donationDate) {
        return blooddonationsService.findBloodDonationsBydonationDate(donationDate);
    }
}
