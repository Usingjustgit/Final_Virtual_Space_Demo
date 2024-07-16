package com.example.react_backend_apis.User_Controller;

import com.example.react_backend_apis.User_Repository.User_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.Principal;

@RestController
public class User_Personal_API {

    @Autowired
    private User_Repository userRepository;

    @GetMapping("/get/data")
    public String just(){
        return "We here just try to featch information on the databases;";
    }

    @PostMapping("/uplode/file")
    public String fetchFiles(@RequestParam("file") MultipartFile file){
        String result = "This file is not uploded.";


        try {

            System.out.println(file.getContentType());
            System.out.println(file.getOriginalFilename());
            System.out.println(file.getSize());

            if(file.getContentType().equals("image/jpeg")){

                File save_file = new ClassPathResource("/static/Images").getFile();
                Path path =  Paths.get(save_file.getAbsolutePath()+File.separator+file.getOriginalFilename());
                Files.copy(file.getInputStream(),path, StandardCopyOption.REPLACE_EXISTING);

            } else if (file.getContentType().equals("video/mp4")) {

                File save_file = new ClassPathResource("/static/Videos").getFile();
                Path path =  Paths.get(save_file.getAbsolutePath()+File.separator+file.getOriginalFilename());
                Files.copy(file.getInputStream(),path, StandardCopyOption.REPLACE_EXISTING);

            } else if (file.getContentType().equals("application/pdf") || file.getContentType().equals("application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {

                File save_file = new ClassPathResource("/static/Documents").getFile();
                Path path =  Paths.get(save_file.getAbsolutePath()+File.separator+file.getOriginalFilename());
                Files.copy(file.getInputStream(),path, StandardCopyOption.REPLACE_EXISTING);

            } else if (file.getContentType().equals("audio/mpeg") || file.getContentType().equals("audio/mp3")) {

                File save_file = new ClassPathResource("/static/Audios").getFile();
                Path path =  Paths.get(save_file.getAbsolutePath()+File.separator+file.getOriginalFilename());
                Files.copy(file.getInputStream(),path, StandardCopyOption.REPLACE_EXISTING);

            }

            return "Your File is Uploded Successfully.";

        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }

}
