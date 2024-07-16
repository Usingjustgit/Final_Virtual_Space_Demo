package com.example.security_with_jwt_tokan.Repository;

import com.example.security_with_jwt_tokan.Entity.UserDetails;
import org.springframework.data.repository.CrudRepository;

public interface User_Reository extends CrudRepository<UserDetails, Integer> {
}
