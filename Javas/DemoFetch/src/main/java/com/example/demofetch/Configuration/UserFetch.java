//package com.example.demofetch.Configuration;
//
//import com.example.demofetch.Repository.UserRepository;
//import com.example.demofetch.UserDetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//@Service
//public class UserFetch implements UserDetailsService {
//
//    private UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//
//        System.out.println(username);
//        User user = userRepository.getUserByUsername("rahul");
//        System.out.println(user);
//        if(user == null){
//            throw new UsernameNotFoundException("User not found.");
//        }
//
//        CostomDetails costomDetails = new CostomDetails(user);
//
//        return costomDetails;
//    }
//}
