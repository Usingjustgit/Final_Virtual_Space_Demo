package com.contectdetails.Security;

import com.contectdetails.Entity.User_Profile;
import com.contectdetails.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImplement implements UserDetailsService{

    @Autowired
    private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User_Profile user_profile = this.userRepository.getUserName(username);
        System.out.println(user_profile);

        if(user_profile == null){
            throw new UsernameNotFoundException("User is not found.");
        }

        CustomUser customUser = new CustomUser(user_profile);

        return customUser;
    }
}

