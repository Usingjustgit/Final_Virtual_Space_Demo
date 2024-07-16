package com.contectdetails.Security;

import com.contectdetails.Entity.User_Profile;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
public class CustomUser implements UserDetails {

    private User_Profile user_profile;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        System.out.println("I am comming on the Collection Fremwoerks.");
        return List.of(new SimpleGrantedAuthority(this.user_profile.getUser_role()));
    }

    @Override
    public String getPassword() {
        return this.user_profile.getUser_password();
    }

    @Override
    public String getUsername() {
        return this.user_profile.getUser_email();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}