package com.bloodassist.BloodAssist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bloodassist.BloodAssist.models.BloodInventory;
import com.bloodassist.BloodAssist.service.BloodInventoryService;

@RestController
@RequestMapping("/bloodinventory")
public class BloodInventoryController {
	
	@Autowired
    private BloodInventoryService bloodinventoryService;
	
	@PostMapping("/register-bloodinventory")
    public BloodInventory registerBloodInventory(@RequestBody BloodInventory bloodinventory) {
        return bloodinventoryService.registerBloodInventory(bloodinventory);
    }
	
	@GetMapping("/by-bloodType/{bloodType}")
    public List<BloodInventory> findBloodInventoryBybloodType(@PathVariable String bloodType) {
        return bloodinventoryService.findBloodInventoryBybloodType(bloodType);
    }
}
