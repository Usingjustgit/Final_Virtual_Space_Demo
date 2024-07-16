package com.example.demofetch.Controller;

//import com.example.demofetch.Repository.UserRepository;
import com.example.demofetch.Repository.UserRepository;
import com.example.demofetch.UserDetails.Employees;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {

    private UserRepository userRepository;

    @GetMapping("/")
    public String homePage(){
        return "home";
    }

    @GetMapping("/registration")
    public String login(){
        return "login";
    }

    @PostMapping("/data")
    public String ragistration(@ModelAttribute("employee") Employees employee){
        employee.setRole("ADMIN");
        userRepository.save(employee);
        return "home";
    }
}
