package com.bloodassist.BloodAssist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bloodassist.BloodAssist.models.Donors;
import com.bloodassist.BloodAssist.service.DonorsService;

@RestController
@RequestMapping("/donors")
public class DonorsController {
	
	@Autowired
    private DonorsService donorsService;
	
	@PostMapping("/register-donors")
    public Donors registerDonors(@RequestBody Donors donors) {
        return donorsService.registerDonors(donors);
    }
	
	@GetMapping("/by-bloodType/{bloodType}")
    public List<Donors> findDonorsBybloodType(@PathVariable String bloodType) {
        return donorsService.findDonorsBybloodType(bloodType);
    }
}
