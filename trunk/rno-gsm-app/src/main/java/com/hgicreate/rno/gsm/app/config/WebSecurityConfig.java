package com.hgicreate.rno.gsm.app.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Value("${rno.gsm.security:true}")
	private String security;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		String strPatterns = "/webjars/**";

		if (security.equalsIgnoreCase("false")) {
			strPatterns = "/**";
		}

		http.authorizeRequests()
				.antMatchers("/css/**", "/img/**", "/js/**", "/lib/**", "/files/**", "/page/**", "/file/**","/download/page/**","/monitorExtract/**","/defaultKaptcha","/imgvrifyControllerDefaultKaptcha", strPatterns)
				.permitAll().anyRequest().authenticated().and().formLogin().loginPage("/login")
				.defaultSuccessUrl("/index", true).permitAll().and().logout().logoutSuccessUrl("/logoutSuccess").permitAll();

		// 解决 iframe 的权限问题
		http.headers().frameOptions().sameOrigin().httpStrictTransportSecurity().disable().and().csrf().disable();
	}

	@Value("${rno.gsm.username:sa}")
	private String username;

	@Value("${rno.gsm.password:Zj2017!@}")
	private String password;

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication().withUser(username).password(password).roles("USER").and().withUser("admin")
				.password("admin").roles("ADMIN");
	}

}
