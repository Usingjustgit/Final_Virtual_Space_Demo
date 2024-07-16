package com.api.Service;

import com.api.Controller.FileUploadConroller;
import com.api.Entity.BookInfo;
import com.api.Repository.BookRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Getter
@Setter
@Component
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private FileUploadConroller fileUploadConroller;
//    private static List<BookInfo> list = new ArrayList<>();
//
//    static{
//        list.add(new BookInfo(1,"Social Science",99,"public"));
//        list.add(new BookInfo(2,"Gujarati",999,"Gujatat teacher"));
//        list.add(new BookInfo(3,"Sanskrit",9999,"Santo's"));
//    }

    public List<BookInfo> getAllBook(){
        try{
            return (List<BookInfo>) this.bookRepository.findAll();
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    public BookInfo getBook(int id){
        return this.bookRepository.findById(id);
    }

    public ResponseEntity<BookInfo> addBook(BookInfo book){
        try{
            bookRepository.save(book);
        }catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        return ResponseEntity.of(Optional.of(book));
    }

    public void deleteBook(int id){

        this.bookRepository.deleteById(id);
//
//        List<BookInfo> lists = list.stream().filter(e->e.getId()!=id).collect(Collectors.toList());
//        this.list = lists;
    }

    public void updateBook(BookInfo book, int id){
//        List<BookInfo> list1 = list.stream().map(e->{
//            if(e.getId()==id){
//                e.setName(book.getName());
//                e.setPrice(book.getPrice());
//                e.setAuthor(book.getAuthor());
//            }
//            return e;
//        }).collect(Collectors.toList());
//        this.list = list1;
        book.setId(id);
        this.bookRepository.save(book);
    }
}
