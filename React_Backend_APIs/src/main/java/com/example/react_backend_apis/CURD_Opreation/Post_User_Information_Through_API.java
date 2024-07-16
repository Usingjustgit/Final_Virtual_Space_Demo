package com.example.react_backend_apis.CURD_Opreation;

import com.example.react_backend_apis.User_Repository.User_Repository;
import com.example.react_backend_apis.User_Table.User_Table_Information;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@RestController
public class Post_User_Information_Through_API {

    LocalDateTime current_time = LocalDateTime.now();

    @Autowired
    private User_Repository userRepository;

    @PostMapping("/add/single/user/data")
    public String staringPostData(@ModelAttribute User_Table_Information userTableInformation, @RequestParam("file") MultipartFile file){

        try {
            userTableInformation.setProfile_Picture(file.getOriginalFilename());
            userTableInformation.setId_Creation_Date_And_Time(current_time);

            User_Table_Information user = this.userRepository.save(userTableInformation);
            return "User add successsfull"+user;
        }catch (Exception e){
            e.printStackTrace();
        }
        return "User dose not add on the database.";
    }

    @PostMapping("/file")
    public String sentFile(@RequestParam("file") MultipartFile file){
        return file.getOriginalFilename();
    }
}
