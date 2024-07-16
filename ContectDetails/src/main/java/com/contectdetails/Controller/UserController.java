package com.contectdetails.Controller;

import com.contectdetails.Entity.Contect_Details;
import com.contectdetails.Entity.User_Profile;
import com.contectdetails.Repository.ContectRepository;
import com.contectdetails.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.Principal;
import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    public BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ContectRepository contectRepository;

    @GetMapping("/desbord")
    public String userDesbord(){
        return "user/User_Main_Deshbord";
    }

    @GetMapping("/home")
    public String userIndex(Principal principal,Model model){

        User_Profile user = this.userRepository.getUserName(principal.getName());

        model.addAttribute("username",user.getUser_name());
        model.addAttribute("userpicture",user.getUser_picture());
        model.addAttribute("userdescription",user.getUser_about());

        return "user/index";
    }

    @GetMapping("/add-contect")
    public String addContect(){
        return "user/add_contect";
    }

    @PostMapping("/add_contect_process")
    public String addContectDataBase(@ModelAttribute Contect_Details contect_details,@RequestParam("contectImage") MultipartFile file,Principal principal){

        try{

            contect_details.setContect_fevorite(true);
            System.out.println(contect_details);
            String name = principal.getName();
            System.out.println(name);
            User_Profile user_profile = this.userRepository.getUserName(name);

            contect_details.setUser_profile(user_profile);

            if(file.isEmpty()){
                contect_details.setContect_picture("demo.png");
            }else {
                contect_details.setContect_picture(file.getOriginalFilename());
                System.out.println("Line 1 is comming");
                File save_file = new ClassPathResource("static/Images/").getFile();
                System.out.println("Line 2 is comming");
                Path path =  Paths.get(save_file.getAbsolutePath()+File.separator+file.getOriginalFilename());
                System.out.println("Line 3 is comming");
                Files.copy(file.getInputStream(),path, StandardCopyOption.REPLACE_EXISTING);
                System.out.println("Image is uploaded");
            }
            user_profile.getContects().add(contect_details);
//        System.out.println(user_profile);
            this.userRepository.save(user_profile);
        }catch (Exception e){
            return "home";
        }

        return "redirect:/user/add-contect";
    }


    @GetMapping("/view/all/contects")
    public String viweAllContects(Model model,Principal principal){

        String name = principal.getName();
        User_Profile user = this.userRepository.getUserName(name);
        List<Contect_Details> contects = this.contectRepository.getAllByContects(user.getUser_id());
//        System.out.println(contects);
        model.addAttribute("contects",contects);

        System.out.println("All data is sending.");

        return "user/view_all_contects";
    }

    @GetMapping("/single/contect/profile/{c_id}")
    public String singleContectProfile(@PathVariable("c_id") int c_id,Model model,Principal principal){

        User_Profile user = this.userRepository.getUserName(principal.getName());
        Contect_Details contect = this.contectRepository.findById(c_id).get();

        if(contect.equals(contect)){
            model.addAttribute("contect",contect);
            return "user/single_contect_view";
        }
        return "redirect:/user/view/all/contects";
    }

    @PostMapping("/update/{id}")
    public String updateContectForm(@PathVariable("id") Integer id, Model model){

        Contect_Details contect = this.contectRepository.findById(id).get();

        model.addAttribute("data",contect);

        return "user/update_data";
    }

    @PostMapping("/updating/contect")
    public String updateContectData(@ModelAttribute Contect_Details contect, @RequestParam("contectImage") MultipartFile file, Principal principal){
        try{

            Contect_Details oldcontectDetails = this.contectRepository.findById(contect.getContect_id()).get();

            if(!file.isEmpty()){
//                Delete Old Picture on Folder
                File delete_picture = new ClassPathResource("static/Images/").getFile();
                File file1 = new File(delete_picture,oldcontectDetails.getContect_picture());
                file1.delete();

                contect.setContect_picture(file.getOriginalFilename());
                System.out.println("Line 1 is comming");
                File update_file = new ClassPathResource("static/Images/").getFile();
                System.out.println("Line 2 is comming");
                Path path =  Paths.get(update_file.getAbsolutePath()+File.separator+file.getOriginalFilename());
                System.out.println("Line 3 is comming");
                Files.copy(file.getInputStream(),path, StandardCopyOption.REPLACE_EXISTING);
                System.out.println("Image is uploaded");
            }else {
                contect.setContect_picture(oldcontectDetails.getContect_picture());
            }

            User_Profile user = this.userRepository.getUserName(principal.getName());

            contect.setUser_profile(user);

            this.contectRepository.save(contect);

            return "redirect:/user/view/all/contects";
        }catch (Exception e){
            System.out.println("somthig wrong");
            return "home";
        }
    }

    @GetMapping("/delete_contect/{id}")
    @Transactional
    public String deleteSingleContect(@PathVariable("id") Integer id,Principal principal){
        try{

            System.out.println(id);
            User_Profile user = this.userRepository.getUserName(principal.getName());
            Contect_Details contect = this.contectRepository.findById(id).get();
            System.out.println("Hii This is Line number 2");
            if(contect.equals(contect)){
                if(contect.getContect_picture() == "demo.png"){

                }else{
                    File delete_picture = new ClassPathResource("static/Images/").getFile();

                    File file1 = new File(delete_picture,contect.getContect_picture());
                    file1.delete();
                }

                user.getContects().remove(contect);
            }

            System.out.println("Hii This is Line number 0");


            this.userRepository.save(user);

            System.out.println("Your data is deleting successfull.");

            return "redirect:/user/view/all/contects";

        }catch (Exception e){
            return "home";
        }
    }

//    Searching With name Contects
    @GetMapping("/results/{query}")
    public String findSearchedAllContects(@PathVariable("query") String query,Principal principal,Model model){

        User_Profile user = this.userRepository.getUserName(principal.getName());

        List<Contect_Details> contects = this.contectRepository.findByNameContainingAndUser_profile(query,user.getUser_id());

        model.addAttribute("contects",contects);

        return "user/view_all_contects";
    }

    @GetMapping("/change/password")
    public String chengePasswordTemplate(){
        return "user/changePassword";
    }

    @PostMapping("/change/password/processing")
    public String changPassword(@RequestParam("oldPassword") String oldPassword, @RequestParam("newPassword") String newPassword,Principal principal){

        User_Profile user = this.userRepository.getUserName(principal.getName());

        if (this.passwordEncoder.matches(oldPassword, user.getUser_password())){
            user.setUser_password(this.passwordEncoder.encode(newPassword));
            this.userRepository.save(user);
        }
        else {
            return "home";
        }

        return "redirect:/user/view/all/contects";
    }


    @GetMapping("/logout")
    public String userLogout(){
        return "logout";
    }
}
