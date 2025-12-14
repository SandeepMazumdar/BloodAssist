package com.bloodassist.BloodAssist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bloodassist.BloodAssist.models.BloodRequests;
import com.bloodassist.BloodAssist.service.BloodRequestsService;

@RestController
@RequestMapping("/bloodrequests")
public class BloodRequestsController {
	
	@Autowired
    private BloodRequestsService bloodrequestsService;
	
	@PostMapping("/register-bloodrequests")
    public BloodRequests registerBloodRequests(@RequestBody BloodRequests bloodrequests) {
        return bloodrequestsService.registerBloodRequests(bloodrequests);
    }
	
	@GetMapping("/by-urgencyLevel/{urgencyLevel}")
    public List<BloodRequests> findBloodRequestsByurgencyLevel(@PathVariable String urgencyLevel) {
        return bloodrequestsService.findBloodRequestsByurgencyLevel(urgencyLevel);
    }
}
