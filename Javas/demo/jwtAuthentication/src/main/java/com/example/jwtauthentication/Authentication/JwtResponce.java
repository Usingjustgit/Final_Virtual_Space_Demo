package com.example.jwtauthentication.Authentication;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class JwtResponce {

    private String jwtToken;
    private String username;
}
