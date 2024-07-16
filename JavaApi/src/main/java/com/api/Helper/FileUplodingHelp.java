package com.api.Helper;

import lombok.NoArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

@Component
public class FileUplodingHelp {
//    public final String Uplode_file = "D:\\JavaApi\\src\\main\\resources\\static\\Image";
    public final String UPLOAD_FILE  = new ClassPathResource("static/Image/").getFile().getAbsolutePath();

    public FileUplodingHelp() throws IOException {

    }

    public boolean uplodFile(MultipartFile file){
        boolean result = false;
        try{
            InputStream is = file.getInputStream();
            byte data[] = new byte[is.available()];
            is.read();
            System.out.println(UPLOAD_FILE);
            FileOutputStream fos = new FileOutputStream(UPLOAD_FILE+"\\"+file.getOriginalFilename());
            fos.flush();
            fos.close();
            result = true;
        }catch (Exception e){
            e.printStackTrace();
            result = false;
        }
        return result;
    }
}
