package com.example.react_backend_apis.User_Table;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User_Pictures {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int Picture_id;

    private String Picture_Name;

    private String Picture_Original_Name;

    private LocalDateTime Uploded_Date_And_Time;

    @ManyToOne
    private User_Table_Information userTableInformation;
}