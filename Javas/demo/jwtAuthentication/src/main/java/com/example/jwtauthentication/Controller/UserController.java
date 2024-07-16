package com.example.jwtauthentication.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/")
    public String normalPage(){
        return "I am present here...";
    }


    @GetMapping("/home")
    public String homePage(){
        return "I am present here on Home directory.";
    }


    @GetMapping("/index")
    public String indexPage(){
        return "I am present here on Index directory.";
    }

}
