package com.example.security_with_jwt_tokan.Controller;

import com.example.security_with_jwt_tokan.Security.Security_Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class User_Path_Controller {

    @Autowired
    private Security_Configuration securityConfiguration;

    @GetMapping("/user/index")
    public String homePage(){
        return "This is Home Page.";
    }

    @GetMapping("/user/identification")
    public String loginUserName(Principal principal){
        return principal.getName();
    }
}
