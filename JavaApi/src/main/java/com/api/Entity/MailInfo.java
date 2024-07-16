package com.api.Entity;

import lombok.*;
import org.springframework.stereotype.Component;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Component
public class MailInfo {

    private String message;
    private String to;
    private String from;
    private String subject;

    public boolean sendEmail(String to,String from, String subject, String message){

        String host = "smtp.gamil.com";

        Properties properties = System.getProperties();
        System.out.println("Propertise : "+properties);

        properties.put("mail.smtp.host",host);
        properties.put("mail.smtp.port","465");
        properties.put("mail.smtp.ssl.enable","true");
        properties.put("mail.smtp.auth","true");

        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("userforplayer54321@gmail.com","players@54321");
            }
        });

        session.setDebug(true);

        MimeMessage m = new MimeMessage(session);

        try {

            m.setFrom(from);
            m.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            m.setSubject(subject);
            m.setText("Hi, This is a General Message to Testing sending email......");
            Transport.send(m);

        }catch (Exception e){
            e.printStackTrace();
        }

        System.out.println("message sending successfully..........");

        return true;
    }

}
