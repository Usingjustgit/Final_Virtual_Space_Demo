package com.contectdetails.Entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class User_Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int user_id;

    private String register_date;


    @NotBlank(message = "name is must be required.")
    @Size(min=6,max=51,message="min-6 or max-50 character required.")
    private String user_name;


    @Column(unique = true)
    @Email(regexp = "^[A-Za-z0-1_.-]{3,31}@[A-Za-z]{4,11}.[A-Za-z]{2,9}",message = "Email Address is invalid.")
    private String user_email;

    @NotBlank(message = "password must be required")
    private String user_password;

    private String user_role;

    private boolean user_active;

    private String user_about;

    @Column(length = 12)
    @NotBlank(message = "contect must be required")

    @Size(min=10,max=10,message = "mobile is invalid.")
    private String user_mobile;

    @NotBlank(message = "gender not selected.")
    private String user_gender;

    private String user_picture;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,mappedBy = "user_profile",orphanRemoval = true)
    private List<Contect_Details> contects = new ArrayList<>();

}
