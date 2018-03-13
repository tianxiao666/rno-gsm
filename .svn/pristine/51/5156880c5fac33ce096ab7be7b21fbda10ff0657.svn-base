package com.hgicreate.rno.gsm.app.controller;

import com.google.code.kaptcha.impl.DefaultKaptcha;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.experimental.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.*;

/**
 * Created by xiao.sz on 2017/5/4.
 */
@RestController
@CrossOrigin
public class LoginController {

    public Map<String, List<String>> userDb = new HashMap<>();
    String secretKey = "HGYCWOWwowahaOhoenHENG";
    public LoginController() {
        //用户名 密码
        userDb.put("sa", Arrays.asList("Zj2017!@"));
    }

    @SuppressWarnings("unused")
    private static class UserLogin {
        public String name;
        public String password;
    }

    @SuppressWarnings("unused")
    private static class LoginResponse {
        public String token;

        public LoginResponse(final String token) {
            this.token = token;
        }
    }

    @GetMapping("/login")
    LoginResponse login(HttpServletRequest request,HttpServletResponse response)
            throws ServletException{

        UserLogin login=new UserLogin();
        login.name=request.getParameter("username");
        login.password=request.getParameter("password");
        if (login.name == null || !userDb.containsKey(login.name)) {
            response.setStatus(401);
        }

        if(!userDb.get(login.name).get(0).equals(login.password)){
//            throw new ServletException("Wrong Username or Password");
            response.setStatus(401);
        }
        Date expiration = new Date((new Date().getTime()));
        expiration.setMonth(expiration.getMonth()+1);
        return new LoginResponse(Jwts.builder()
                .setSubject(login.name)
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .setExpiration(expiration)
                .compact());
    }

    @GetMapping("/checkLogin")
    String checkLogin(HttpServletRequest request,HttpServletResponse response){
        String authParams = request.getHeader("Authorization");
        final String token = authParams.substring(6);
        String username = Jwts.parser().setSigningKey(secretKey)
                .parseClaimsJws(token).getBody().get("sub").toString();
        return "{\"status\":\"true\",\"username\":\""+username+"\"}";
    }

    @Autowired
    DefaultKaptcha defaultKaptcha;

    @GetMapping("/defaultKaptcha")
    public void defaultKaptcha(HttpServletRequest request,HttpServletResponse response) throws Exception{
        //根据传来的参数制作验证码图片
        String d = request.getParameter("d");
        byte[] captchaChallengeAsJpeg = null;
        ByteArrayOutputStream jpegOutputStream = new ByteArrayOutputStream();
        try {
            BufferedImage challenge = defaultKaptcha.createImage(d);
            ImageIO.write(challenge, "jpg", jpegOutputStream);
        } catch (IllegalArgumentException e) {
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
            return;
        }
        //定义response输出类型为image/jpeg类型，使用response输出流输出图片的byte数组
        captchaChallengeAsJpeg = jpegOutputStream.toByteArray();
        response.setHeader("Cache-Control", "no-store");
        response.setHeader("Pragma", "no-cache");
        response.setDateHeader("Expires", 0);
        response.setContentType("image/jpeg");
        ServletOutputStream responseOutputStream =
                response.getOutputStream();
        responseOutputStream.write(captchaChallengeAsJpeg);
        responseOutputStream.flush();
        responseOutputStream.close();
    }
}
