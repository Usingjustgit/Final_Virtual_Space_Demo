package com.example.demofetch.Repository;

import com.example.demofetch.UserDetails.Employees;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<Employees, Integer> {

}