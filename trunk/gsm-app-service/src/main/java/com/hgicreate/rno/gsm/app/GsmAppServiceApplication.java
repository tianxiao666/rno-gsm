package com.hgicreate.rno.gsm.app;

import com.hgicreate.rno.gsm.app.config.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@EnableAutoConfiguration
@ComponentScan
@Configuration
public class GsmAppServiceApplication {
    @Bean
    public FilterRegistrationBean jwtFilter() {
        final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
        registrationBean.setFilter(new JwtFilter());
        registrationBean.addUrlPatterns("/api/*","/getWorkOrderStatistics/*","/checkLogin/*",
                "/indexMonitorResult/*","/exportIndexMonitor/*","/getWorkOrder/*",
                "/getDetailById/*","/saveResultById/*","/processWorkOrderBatch/*");

        return registrationBean;
    }

    public static void main(String [] args){
        SpringApplication.run(GsmAppServiceApplication.class);
    }
}
