package com.hgicreate.rno.gsm.app.controller;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;

import javax.servlet.MultipartConfigElement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class IndicatorUploadController {

    @Autowired
    private MultipartConfigElement multipartConfigElement;

    @GetMapping("/page")
    ModelAndView index() {
        // 判断本地文件路径是否存在，否则创建
        File file = new File(multipartConfigElement.getLocation());
        if (!file.exists()) {
            file.mkdirs();
        }
        return new ModelAndView("indicator");
    }

    @PostMapping("/file")
    String postFile(MultipartHttpServletRequest request) {
        try {
            Iterator<String> itr = request.getFileNames();
            MultipartFile mpf;
            while (itr.hasNext()) {
                mpf = request.getFile(itr.next());
                File f = new File(multipartConfigElement.getLocation() + "/" + mpf.getOriginalFilename());
                mpf.transferTo(f);
            }
        } catch (IllegalStateException e) {
            e.printStackTrace();
            return "上传失败";
        } catch (IOException e) {
            e.printStackTrace();
            return "上传失败";
        }
        return "上传成功";
    }

}