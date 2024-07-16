package com.contectdetails.Repository;

import com.contectdetails.Entity.User_Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User_Profile, Integer> {

    @Query("select user from User_Profile user where user.user_email =:email")
    User_Profile getUserName(@Param("email") String email);

    @Query("select user from User_Profile user")
    List<User_Profile> getAllUser();
}
