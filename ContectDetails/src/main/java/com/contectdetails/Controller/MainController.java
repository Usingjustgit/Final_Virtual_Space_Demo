package com.contectdetails.Controller;

import com.contectdetails.Entity.User_Profile;
import com.contectdetails.Repository.UserRepository;
//import com.contectdetails.Service.EmailSendingServise;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Random;

@Controller
public class MainController {

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

//    @Autowired
//    private EmailSendingServise emailSendingServise;

//    Random serial_no = new Random(1000000);

    @GetMapping("/")
    public String rootPagePath() {
        return "Root";
    }

    @GetMapping("/home")
    public String homePagePath() {
        return "home";
    }

    @GetMapping("/about")
    public String aboutPagePath() {
        return "about";
    }

    @GetMapping("/contect")
    public String contectPagePath() {
        return "contect";
    }

    @GetMapping("/login")
    public String loginPagePath(Model model) {
//        System.out.println(user_profile);
        model.addAttribute("predata",new User_Profile());
        return "login";
    }

    @GetMapping("/registration")
    public String registrationPagePath(Model model) {
        model.addAttribute("predata",new User_Profile());
        return "registration";
    }

    @PostMapping("/pocessing")
    public String processigPagePath(@ModelAttribute("user_profile") User_Profile user_profile, @RequestParam(value = "aggrement", defaultValue = "false") boolean aggrement, Model model, HttpSession session) {
        try {

            if (!aggrement) {
                System.out.println(user_profile);
                throw new Exception();
            }
            LocalDateTime date = LocalDateTime.now();
            DateTimeFormatter df = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

            user_profile.setUser_role("User_Roll");
            user_profile.setRegister_date(df.format(date));
            user_profile.setUser_active(true);
            user_profile.setUser_picture("user_profile");
            user_profile.setUser_password(passwordEncoder.encode(user_profile.getUser_password()));
            this.userRepository.save(user_profile);
            System.out.println(user_profile);

            return "home";
        } catch (Exception e) {
            e.printStackTrace();
            model.addAttribute("predata",user_profile);
            System.out.println("Comming Somthig Error");
            return "redirect:/user/add-contect";
        }
    }

    @GetMapping("/forgot/password")
    public String forgotPassword(){
        return "forgot_password";
    }

    @PostMapping("/checking/user")
    public String veryfyEmail(@ModelAttribute String email) {
        User_Profile user = this.userRepository.getUserName(email);

        if (user == null) {
            return "redirect:/forgot/password";
        }

        String subject = "Cotect Diary";
//        String message = "Some message is sendig for you verify otp is " + serial_no;

//        boolean fleg = emailSendingServise.sendingEmail(email,subject,message);

//        if(fleg){
//
//            return "verify_OTP";
//
//        }else {
//            return "forgot_password";
//        }
        return "false";

    }
}
