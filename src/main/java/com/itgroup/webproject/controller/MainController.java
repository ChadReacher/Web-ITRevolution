package com.itgroup.webproject.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.itgroup.webproject.entity.User;
import com.itgroup.webproject.repository.UserRepository;
import com.itgroup.webproject.security.BcryptPasswordEncoder;
import com.itgroup.webproject.security.UserSecurity;
import com.itgroup.webproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "https://user-viewer.herokuapp.com/")
public class MainController {

    UserService userService;

    @Autowired
    public MainController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/isAuthenticated")
    public String isRegistered() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication instanceof AnonymousAuthenticationToken) {
            return "{\"isAuth\":" + false + "}";
        } else {
            return "{\"isAuth\":" + true + "}";
        }
    }

    @GetMapping("users")
    public List<User> getAllUsers() {
        return userService.getAllUsers().subList(0, 10);
    }

    @GetMapping("users/{id}")
    public User getUserById(@PathVariable("id") Long id) {
        return userService.getUserById(id);
    }

    @PostMapping("users/update")
    public User update(@RequestBody User user) {
        userService.updateUser(user.getUserId(), user);
        return userService.getUserById(user.getUserId());
    }

    @GetMapping("profile")
    public User getUserProfile() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication instanceof AnonymousAuthenticationToken) {
            return null;
        } else {
            return ((UserSecurity) authentication.getPrincipal()).getUser();
        }
    }
}
