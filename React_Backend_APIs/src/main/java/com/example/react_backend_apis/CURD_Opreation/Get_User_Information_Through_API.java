package com.example.react_backend_apis.CURD_Opreation;

import com.example.react_backend_apis.User_Repository.User_Repository;
import com.example.react_backend_apis.User_Table.User_Table_Information;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class Get_User_Information_Through_API {

    @Autowired
    private User_Repository userRepository;


    @GetMapping("/app/starting")
    public String RunningApplication(){
        return "Now Your Application is running so You start the Featching Information...";
    }

    @GetMapping("/get/single/user/data/{id}")
    public User_Table_Information addUserInformations(@PathVariable("id") int id){
        User_Table_Information user = this.userRepository.findById(id).get();
        return user;
    }
}
