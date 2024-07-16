package com.example.security_with_jwt_tokan.JWT_Authentication;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class JWT_Responce {

        private String jwtToken;
        private String username;
}
