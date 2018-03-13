package com.hgicreate.rno.gsm.app.controller;

import com.hgicreate.rno.gsm.app.bean.Authen;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by xiao.sz on 2017/4/25.
 */
@Controller
public class LogoutController {
    @GetMapping("/logoutSuccess")
    void logoutSuccess(HttpServletResponse response){
        Authen.getInstance().setAuthenti(false);
        try {
            response.sendRedirect("/login");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
