package com.contectdetails.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Contect_Details {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int contect_id;
    private String contect_name;
    private String contect_email;
    private String contect_description;
    private String contect_picture;
    @Column(unique = true,length = 10)
    private String contect_number;
    private String contect_work;
    private boolean contect_fevorite;
    @ManyToOne
    @JsonBackReference
    private User_Profile user_profile;

    @Override
    public String toString() {
        return "Contect_Details{" +
                "contect_id=" + contect_id +
                ", contect_name='" + contect_name + '\'' +
                ", contect_email='" + contect_email + '\'' +
                ", contect_description='" + contect_description + '\'' +
                ", contect_picture='" + contect_picture + '\'' +
                ", contect_number='" + contect_number + '\'' +
                ", contect_work='" + contect_work + '\'' +
                ", contect_fevorite=" + contect_fevorite +
                '}';
    }

    @Override
    public boolean equals(Object obj) {
        return this.contect_id == ((Contect_Details) obj).getContect_id();
    }
}
