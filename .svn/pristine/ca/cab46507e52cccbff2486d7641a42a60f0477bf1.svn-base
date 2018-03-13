package com.hgicreate.rno.gsm.controller.usermanage;

import com.hgicreate.rno.gsm.constant.GsmConstant;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.model.User;
import com.hgicreate.rno.gsm.service.usermanage.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserManageController {

    private static final Logger logger = LoggerFactory.getLogger(UserManageController.class);


    private UserService userService;

    public UserManageController(UserService userService){
        this.userService=userService;
    }


    @GetMapping("/")
    ModelAndView index(HttpSession session, Principal principal,ModelAndView modelAndView) {
        if (null == session.getAttribute("user")) {
            // 获取用户对象
            String username = principal.getName();
            User user = userService.getUser(username);
            logger.info("在 Session 中添加用户：" + user);
            session.setAttribute("user", user);
        }
        modelAndView.setViewName("index");
        return modelAndView;
    }

    @GetMapping("/userManager")
    ModelAndView userManager() {
        logger.debug("所有用户 : " + userService.getAllNormalUsers());
        ModelAndView modelAndView=new ModelAndView("usermanage/userManager");
        List<User> userList=userService.getAllNormalUsers();
        Page page=new Page();
        page.setTotalCnt(userList.size());
        page.setPageSize(GsmConstant.linage);
        page.setCurrentPage(1);
        int totalCnt=page.getTotalCnt();
        page.setTotalPageCnt((int)totalCnt / page.getPageSize() + (totalCnt % page.getPageSize() == 0 ? 0 : 1));

        int startIndex=page.calculateStart();
        int cnt=page.getPageSize();

        modelAndView.addObject("page",page);
        modelAndView.addObject("users",userList.subList(startIndex,
                startIndex+ cnt - 1 >= page.getTotalCnt() ? page.getTotalCnt() : startIndex + cnt - 1));
        return modelAndView;
    }

    @PostMapping("/userByPage")
    Map<String,Object> queryUserBypage(HttpServletRequest request){
        String chineseName;
        logger.debug("queryUserBypage.chineseName={}", chineseName=request.getParameter("chineseName"));

        Map<String,Object> result=new LinkedHashMap<>();

        Page newPage = new Page();
        newPage.setPageSize(GsmConstant.linage);
        newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
        newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
        newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));
        List<User> users=new ArrayList<>();
        if(chineseName ==null || chineseName.trim().equals("")){
            users=userService.getAllNormalUsers();
        }else{
            if(userService.getUserByChineseName(chineseName)!=null){
                users.add(userService.getUserByChineseName(chineseName));
            }
        }

        long totalCnt = newPage.getTotalCnt();
        if (totalCnt < 0) {
            totalCnt=users.size();
            newPage.setTotalCnt((int) totalCnt);
        }
        int startIndex = newPage.calculateStart();
        int cnt = newPage.getPageSize();
        newPage.setTotalPageCnt((int)totalCnt / newPage.getPageSize() + (totalCnt % newPage.getPageSize() == 0 ? 0 : 1));
        newPage.setForcedStartIndex(-1);
        result.put("page",newPage);
        result.put("users",users.subList(startIndex,
                startIndex+ cnt - 1 >= newPage.getTotalCnt() ? newPage.getTotalCnt() : startIndex + cnt - 1));
        return result;
    }
}
