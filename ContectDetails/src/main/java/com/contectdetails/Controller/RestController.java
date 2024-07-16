package com.contectdetails.Controller;

import com.contectdetails.Entity.Contect_Details;
import com.contectdetails.Entity.User_Profile;
import com.contectdetails.Repository.ContectRepository;
import com.contectdetails.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.security.Principal;
import java.util.List;

@org.springframework.web.bind.annotation.RestController
public class RestController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ContectRepository contectRepository;

    @GetMapping("/search/{query}")
    public ResponseEntity<?> contectName(@PathVariable("query") String query, Principal principal){

        User_Profile user = this.userRepository.getUserName(principal.getName());

        List<Contect_Details> contects = this.contectRepository.findByNameContainingAndUser_profile(query,user.getUser_id());

        return ResponseEntity.ok(contects);
    }

    @GetMapping("/jwt/auth")
    public List<User_Profile> listOfuserProfile(){
        return this.userRepository.getAllUser();
    }
}
