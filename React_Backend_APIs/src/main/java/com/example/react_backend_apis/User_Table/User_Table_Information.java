package com.example.react_backend_apis.User_Table;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class User_Table_Information {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String Address;
    private String Profile_Picture;
    private LocalDateTime Brith_Date;
    private LocalDateTime Id_Creation_Date_And_Time;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,orphanRemoval = true,mappedBy = "userTableInformation")
    private List<User_Pictures> User_Pictures = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,orphanRemoval = true,mappedBy = "userTableInformation")
    private List<User_Pictures> User_Videos = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,orphanRemoval = true,mappedBy = "userTableInformation")
    private List<User_Pictures> User_Audios = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER,orphanRemoval = true,mappedBy = "userTableInformation")
    private List<User_Pictures> User_Documents = new ArrayList<>();
}
