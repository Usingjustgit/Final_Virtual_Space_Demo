//package com.example.demofetch.Configuration;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//@EnableWebSecurity
//public class SpringSecurity {
//
//    @Bean
//    public UserDetailsService getUserDetails(){
//        return new UserFetch();
//    }
//
//    @Bean
//    protected DaoAuthenticationProvider authenticationProvider(){
//        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
//        daoAuthenticationProvider.setUserDetailsService(getUserDetails());
//
//        return daoAuthenticationProvider;
//    }
//
//    @Bean
//    protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
//        http.authorizeHttpRequests((request) -> request.requestMatchers("/**")
//                        .hasRole("ADMIN").anyRequest().authenticated())
//                .formLogin((login) -> login.permitAll())
//                .logout((logout) -> logout.permitAll());
//
//        http.authenticationProvider(authenticationProvider());
//
//        return http.build();
//    }
//}
