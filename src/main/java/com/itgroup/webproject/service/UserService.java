package com.itgroup.webproject.service;

import com.itgroup.webproject.entity.User;
import com.itgroup.webproject.repository.UserRepository;
import com.itgroup.webproject.security.BcryptPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BcryptPasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, BcryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<User> getAllUsers() {
        System.out.println("We are trying to get all users");
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).get();
    }

    @Transactional
    public void saveUser(User user) {
        if (!user.getPassword().startsWith("$2a$10")) {
            String encodedPassword = passwordEncoder.passwordEncoder().encode(user.getPassword());
            user.setPassword(encodedPassword);
        }
        userRepository.save(user);
    }

    @Transactional
    public void updateUser(Long id, User user) {
        userRepository.updateUserById(id, user);
    }

    public User getUserByEmail(String email) {
        return userRepository.findUserByEmail(email).orElse(null);
    }

    public void delete(User user) {
        userRepository.delete(user);
    }
}
