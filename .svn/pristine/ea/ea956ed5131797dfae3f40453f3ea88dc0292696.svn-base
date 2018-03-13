package com.hgicreate.rno.gsm.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter {
    
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/error").setViewName("error");
        registry.addViewController("/working").setViewName("working");
        //registry.addViewController("/m").setViewName("mobile/alarm-query");
        //registry.addViewController("/m/alarm").setViewName("mobile/alarm-query");
        //registry.addViewController("/m/alarm-about").setViewName("mobile/about");
    }
}
