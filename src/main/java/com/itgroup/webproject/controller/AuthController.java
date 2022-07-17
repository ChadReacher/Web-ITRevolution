package com.itgroup.webproject.controller;

import com.itgroup.webproject.entity.User;
import com.itgroup.webproject.security.UserSecurity;
import com.itgroup.webproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final UserService userService;


    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("auth")
    public void registerNewUser(User user) {
        userService.saveUser(user);
    }

    @PostMapping("profile")
    public void updateUser(User updatedUser, HttpServletResponse response) throws IOException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user =  ((UserSecurity) authentication.getPrincipal()).getUser();
        userService.updateUser(user.getUserId(), updatedUser);
        response.sendRedirect("/profile");
    }

    @GetMapping("login")
    public String loginPage() {
        return "login";
    }
}
