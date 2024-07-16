package com.example.react_backend_apis;

import com.example.react_backend_apis.User_Repository.User_Repository;
import com.example.react_backend_apis.User_Table.User_Table_Information;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class ReactBackendApIsApplication {

    public static void main(String[] args) {

        ApplicationContext context = SpringApplication.run(ReactBackendApIsApplication.class, args);

        User_Repository userReposetery = context.getBean(User_Repository.class);

        User_Table_Information UTI = new User_Table_Information();

        User_Table_Information save = userReposetery.save(UTI);

        System.out.println(save);
    }

}
