package com.bloodassist.BloodAssist.controller;

import com.bloodassist.BloodAssist.models.*;
import com.bloodassist.BloodAssist.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private DonorsRepository donorRepository;

    @Autowired
    private BloodDonationsRepository bloodDonationRepository;

    @Autowired
    private BloodInventoryRepository bloodInventoryRepository;

    @Autowired
    private BloodRequestsRepository bloodRequestRepository;

    @Autowired
    private UserRepository userRepository;

    // Manage Donors
    @GetMapping("/donors")
    public List<Donors> getAllDonors() {
        return donorRepository.findAll();
    }

    @PostMapping("/donors")
    public Donors addDonor(@RequestBody Donors donor) {
        return donorRepository.save(donor);
    }

    @DeleteMapping("/donors/{id}")
    public void deleteDonor(@PathVariable Long id) {
        donorRepository.deleteById(id);
    }

    // Manage Inventory
    @GetMapping("/inventory")
    public List<BloodInventory> getAllInventory() {
        return bloodInventoryRepository.findAll();
    }

    @PostMapping("/inventory")
    public BloodInventory addInventory(@RequestBody BloodInventory inventory) {
        return bloodInventoryRepository.save(inventory);
    }

    @DeleteMapping("/inventory/{id}")
    public void deleteInventory(@PathVariable Long id) {
        bloodInventoryRepository.deleteById(id);
    }

    // Manage Donations
    @GetMapping("/donations")
    public List<BloodDonations> getAllDonations() {
        return bloodDonationRepository.findAll();
    }

    // Manage Blood Requests
    @GetMapping("/requests")
    public List<BloodRequests> getAllRequests() {
        return bloodRequestRepository.findAll();
    }

    // Manage Users
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}
