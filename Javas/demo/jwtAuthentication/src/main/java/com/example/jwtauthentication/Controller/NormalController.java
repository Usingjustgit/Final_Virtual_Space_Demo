package com.example.jwtauthentication.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NormalController {

    @GetMapping("/login")
    public String authentication(){
        return "auth";
    }

}
