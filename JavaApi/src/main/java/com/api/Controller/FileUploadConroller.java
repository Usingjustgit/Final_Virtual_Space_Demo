package com.api.Controller;

import com.api.Helper.FileUplodingHelp;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class FileUploadConroller {

    @Autowired
    private FileUplodingHelp fileUplodingHelp;

    @PostMapping("/file")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file){
//        System.out.println(file.getOriginalFilename());
//        System.out.println(file.getContentType());
//        System.out.println(file.getSize());
        try{
            if(file.isEmpty()){
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("file is not uploding,try again...");
            }

            fileUplodingHelp.uplodFile(file);

//        return ResponseEntity.status(HttpStatus.OK).body("File Successfully Uploding ....");
            return ResponseEntity.ok(ServletUriComponentsBuilder.fromCurrentContextPath().path("/image/").path(file.getOriginalFilename()).toUriString());
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Somthig gose to wrong...");
        }

    }
}
