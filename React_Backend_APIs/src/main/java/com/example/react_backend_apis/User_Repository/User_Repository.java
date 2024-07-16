package com.example.react_backend_apis.User_Repository;

import com.example.react_backend_apis.User_Table.User_Table_Information;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface User_Repository extends CrudRepository<User_Table_Information, Integer> {

//    @Query("select User from User_Table_Information User where user.name =:name")
//    User_Table_Information getUserName(@Param("name") String name);
}
