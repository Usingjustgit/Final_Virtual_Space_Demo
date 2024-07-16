package com.example.react_backend_apis.User_Repository;

import com.example.react_backend_apis.User_Table.User_Pictures;
import org.springframework.data.repository.CrudRepository;

public interface User_Picture_Repository extends CrudRepository<User_Pictures,Integer> {
}
