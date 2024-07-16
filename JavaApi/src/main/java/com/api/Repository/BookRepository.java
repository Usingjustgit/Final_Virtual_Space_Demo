package com.api.Repository;

import com.api.Entity.BookInfo;
import org.springframework.data.repository.CrudRepository;

public interface BookRepository extends CrudRepository<BookInfo, Integer> {
    public BookInfo findById(int id);
}
