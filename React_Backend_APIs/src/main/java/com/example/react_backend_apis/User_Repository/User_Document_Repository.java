package com.example.react_backend_apis.User_Repository;

import com.example.react_backend_apis.User_Table.User_Documents;
import org.springframework.data.repository.CrudRepository;

public interface User_Document_Repository extends CrudRepository<User_Documents,Integer> {
}
