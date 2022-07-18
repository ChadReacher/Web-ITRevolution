package com.itgroup.webproject.controller;

import com.itgroup.webproject.entity.User;

public class UserJson {
    private User user;
    private boolean isAuth;

    public UserJson(User user, boolean isAuth) {
        this.user = user;
        this.isAuth = isAuth;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public boolean isAuth() {
        return isAuth;
    }

    public void setAuth(boolean auth) {
        isAuth = auth;
    }
}
