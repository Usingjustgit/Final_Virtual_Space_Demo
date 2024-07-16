package com.contectdetails.Repository;

import com.contectdetails.Entity.Contect_Details;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ContectRepository extends JpaRepository<Contect_Details, Integer> {

    @Query("select c from Contect_Details c where c.user_profile.user_id=:user_id")
    List<Contect_Details> getAllByContects(@Param("user_id") int id);

    @Query("select c from Contect_Details  c where c.user_profile.user_id=:id and c.contect_name like %:user_name%")
    List<Contect_Details> findByNameContainingAndUser_profile(@Param("user_name") String user_name,@Param("id") int id);
}

