package com.example.Security_With_JWT_Authentication.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class User_Path_Controller {

    @GetMapping("/user/home")
    public String homePage(){
        return "This is a Home Page,After Some time we write the important objects.";
    }
}
