package com.itgroup.webproject.repository;

import com.itgroup.webproject.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findUserByEmail(String email);

    @Modifying
    @Transactional
    @Query("update User u set u.email = :#{#user.getEmail()}, " +
            "u.password = :#{#user.getPassword()}, " +
            "u.firstName = :#{#user.getFirstName()}, " +
            "u.lastName = :#{#user.getLastName()}, " +
            "u.age = :#{#user.getAge()}, " +
            "u.gender = :#{#user.getGender()} " +
            "where u.userId = :id")
    void updateUserById(@Param("id") Long id, @Param("user") User updatedUser);
}
