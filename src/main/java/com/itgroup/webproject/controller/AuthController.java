package com.itgroup.webproject.controller;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.itgroup.webproject.entity.User;
import com.itgroup.webproject.security.BcryptPasswordEncoder;
import com.itgroup.webproject.security.UserSecurity;
import com.itgroup.webproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@CrossOrigin(origins = "https://user-viewer.herokuapp.com/")
public class AuthController {

    private final UserService userService;
    private BcryptPasswordEncoder bcryptPasswordEncoder;

    @Autowired
    public AuthController(UserService userService, BcryptPasswordEncoder bcryptPasswordEncoder) {
        this.userService = userService;
        this.bcryptPasswordEncoder = bcryptPasswordEncoder;
    }

/*    @GetMapping()
    public ResponseEntity processSuccessLogin() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication instanceof AnonymousAuthenticationToken) {
            return new ResponseEntity(null, HttpStatus.valueOf(401));
        } else {
            User user =  ((UserSecurity) authentication.getPrincipal()).getUser();
            return new ResponseEntity(user, HttpStatus.valueOf(200));
        }
    }*/


    @PostMapping("auth")
    public UserJson registerNewUser(@RequestBody User user) {
        userService.saveUser(user);
        return new UserJson(user, true);
    }

    @PostMapping("delete/{id}")
    public void deleteUser(@PathVariable("id") Long id) {
        userService.delete(userService.getUserById(id));
    }


    @GetMapping("profile")
    public void updateUser(@RequestBody User updatedUser, HttpServletResponse response) throws IOException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user =  ((UserSecurity) authentication.getPrincipal()).getUser();
        userService.updateUser(user.getUserId(), updatedUser);
        response.sendRedirect("/profile");
    }
}
