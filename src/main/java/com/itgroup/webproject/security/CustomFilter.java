package com.itgroup.webproject.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.itgroup.webproject.entity.User;
import com.itgroup.webproject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;
import java.util.stream.Collectors;

public class CustomFilter extends AbstractAuthenticationProcessingFilter {

    public CustomFilter() {
        super(new AntPathRequestMatcher("/login", "POST"));
    }

    private String email;
    private String password;

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException, IOException, ServletException {
        try {
            Map<String, String> requestMap = new ObjectMapper().readValue(request.getInputStream(), Map.class);
            email = requestMap.get("email");
            password = requestMap.get("password");
        } catch (IOException e) {
            throw new AuthenticationServiceException(e.getMessage(), e);
        }
        UsernamePasswordAuthenticationToken authRequest = new UsernamePasswordAuthenticationToken(
                email, password);
        return this.getAuthenticationManager().authenticate(authRequest);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        response.addHeader("Access-Control-Allow-Origin", "*");
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        User user = ((UserSecurity) authResult.getPrincipal()).getUser();
        StringBuilder userJSON = new StringBuilder();
        userJSON.append("{\n");
        userJSON.append("\"userId\": " + user.getUserId() + ",\n");
        userJSON.append("\"email\": \"" + user.getEmail() + "\",\n");
        userJSON.append("\"password\": \"" + user.getPassword() + "\",\n");
        userJSON.append("\"firstName\": \"" + user.getFirstName() + "\",\n");
        userJSON.append("\"lastName\": \"" + user.getLastName() + "\",\n");
        userJSON.append("\"age\": " + user.getAge() + ",\n");
        userJSON.append("\"gender\": \"" + user.getGender() + "\"\n");
        userJSON.append("}");
        response.getWriter().print(userJSON);
        response.getWriter().flush();
        SecurityContextHolder.getContext().setAuthentication(authResult);
    }
}
