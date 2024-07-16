package com.api.Controller;

import com.api.Entity.BookInfo;
import com.api.Entity.MailInfo;
import com.api.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BookApiController {

    @Autowired
    private BookService bookService;

    @Autowired
    private MailInfo mailInfo;

    @GetMapping("/get-all-book")
    public ResponseEntity<List<BookInfo>> books(){
        List<BookInfo> list = this.bookService.getAllBook();
        if(list.size()<=0){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.of(Optional.of(list));
    }

    @GetMapping("/get-book/{id}")
    public ResponseEntity<BookInfo> book(@PathVariable("id") int id){
        BookInfo book = this.bookService.getBook(id);
        if(book == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.of(Optional.of(book));
    }

    @PostMapping("/post-book")
    public ResponseEntity<BookInfo> postbook(@RequestBody BookInfo book){
        return this.bookService.addBook(book);
    }

    @DeleteMapping("/delete-book/{id}")
    public ResponseEntity<String> deletebook(@PathVariable("id") int id){
        try{
            this.bookService.deleteBook(id);
            return ResponseEntity.status(HttpStatus.OK).body("Your Book Successfully Deleted.....");
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Somthig goes to wrong...");
        }
    }

    @PutMapping("/update-book/{id}")
    public ResponseEntity<BookInfo> updatebook(@RequestBody BookInfo book,@PathVariable("id") int id){

        try{
            this.bookService.updateBook(book,id);
            return ResponseEntity.ok().body(book);
        }catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/send/mail")
    public ResponseEntity<?> sendMail(@RequestBody MailInfo mail){

        boolean res = mailInfo.sendEmail(mail.getTo(),mail.getFrom(),mail.getSubject(),mail.getMessage());

        return ResponseEntity.ok("Send Successfully....");
    }
}
