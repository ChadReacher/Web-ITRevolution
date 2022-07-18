package com.itgroup.webproject.controller;

import com.itgroup.webproject.entity.User;
import com.itgroup.webproject.security.UserSecurity;
import com.itgroup.webproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
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
    public void registerNewUser(@RequestBody User user) {
        System.out.println(user);
        userService.saveUser(user);
    }

    @PostMapping("profile")
    public void updateUser(@RequestBody User updatedUser, HttpServletResponse response) throws IOException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user =  ((UserSecurity) authentication.getPrincipal()).getUser();
        userService.updateUser(user.getUserId(), updatedUser);
        response.sendRedirect("/profile");
    }
}
