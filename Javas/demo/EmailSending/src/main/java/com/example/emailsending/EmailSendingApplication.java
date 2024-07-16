package com.example.emailsending;

import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Properties;

@SpringBootApplication
public class EmailSendingApplication {

    public static void main(String[] args) {

        String from = "emailsending786.com@gmail.com";
        String to = "enjoyanytime456@gmail.com";
        String subject = "Java Sprig Boot Email Sending Testing.";
        String message = "Today is new day for me and all not same day fore all....";

        try {
            String host = "smtp.gamil.com";

            Properties properties = System.getProperties();
            System.out.println("Propertise : " + properties);

            properties.put("mail.smtp.auth", true);
            properties.put("mail.smtp.starttls.enable", true); //enable STARTTLS
            properties.put("mail.smtp.port", "587");
            properties.put("mail.smtp.host", "smtp.gmail.com");

            Session session = Session.getInstance(properties, new Authenticator() {
                @Override
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication("emailsending786.com","ywclsunxojbuiafg");
                }
            });

            System.out.println(session);
            session.setDebug(true);

            try {

                MimeMessage m = new MimeMessage(session);
                System.out.println(m);

                m.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
                m.setFrom(new InternetAddress(from));
                m.setSubject(subject);
                m.setText(message);
                System.out.println(m.getAllHeaders());
                Transport.send(m);

            } catch (Exception e) {
                e.printStackTrace();
            }

            System.out.println("message sending successfully..........");
        }catch (Exception e){
            e.printStackTrace();
            System.out.println("Email sending in error");
        }
    }

}
