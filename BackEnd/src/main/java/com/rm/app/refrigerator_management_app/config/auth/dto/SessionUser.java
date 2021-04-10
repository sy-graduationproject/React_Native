package com.rm.app.refrigerator_management_app.config.auth.dto;

import com.rm.app.refrigerator_management_app.domain.user.User;
import lombok.Getter;

import javax.mail.Session;
import java.io.Serializable;

@Getter
public class SessionUser implements Serializable {
    private String name;
    private String email;
    private String picture;

    public SessionUser(User user) {
        this.name = user.getName();
        this.email = user.getEmail();
        this.picture = user.getPicture();
    }
}
