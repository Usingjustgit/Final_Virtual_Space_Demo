//package com.contectdetails.Service;
//
////import jakarta.mail.*;
////import jakarta.mail.internet.InternetAddress;
////import jakarta.mail.internet.MimeMessage;
//import org.springframework.stereotype.Service;
//
//import java.util.Properties;
//
//@Service
//public class EmailSendingServise {
//
//
//    public boolean sendingEmail(String to, String subject, String message) {
//
//        try {
//            String host = "smtp.gamil.com";
//
//            Properties properties = System.getProperties();
//            System.out.println("Propertise : " + properties);
//
//            properties.put("mail.smtp.auth", true);
//            properties.put("mail.smtp.starttls.enable", true); //enable STARTTLS
//            properties.put("mail.smtp.port", "587");
//            properties.put("mail.smtp.host", "smtp.gmail.com");
//
//            Session session = Session.getInstance(properties, new Authenticator() {
//                @Override
//                protected PasswordAuthentication getPasswordAuthentication() {
//                    return new PasswordAuthentication("emailsending786.com", "ywclsunxojbuiafg");
//                }
//            });
//
//            System.out.println(session);
//            session.setDebug(true);
//
//            try {
//
//                MimeMessage m = new MimeMessage(session);
//                System.out.println(m);
//
//                m.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
//                m.setFrom(new InternetAddress("emailsending786.com@gmail.com"));
//                m.setSubject(subject);
//                m.setText(message);
//                System.out.println(m.getAllHeaders());
//                Transport.send(m);
//
//            } catch (Exception e) {
//                e.printStackTrace();
//            }
//
//            System.out.println("message sending successfully..........");
//            return true;
//        } catch (Exception e) {
//            e.printStackTrace();
//            System.out.println("Email sending in error");
//            return false;
//        }
//    }
//}
