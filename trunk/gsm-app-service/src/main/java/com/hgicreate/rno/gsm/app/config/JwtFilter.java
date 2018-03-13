package com.hgicreate.rno.gsm.app.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;
public class JwtFilter extends GenericFilterBean {

    String secretKey = "HGYCWOWwowahaOhoenHENG";

    @Override
    public void doFilter( ServletRequest req,
                         ServletResponse res,
                          FilterChain chain) throws IOException, ServletException {
        final HttpServletRequest request = (HttpServletRequest) req;
        System.out.println("Header in JWT: "+request.getHeader("Authorization"));
        final String authHeader1 = request.getHeader("Authorization");
        final String authHeader = request.getParameter("token");
        System.out.println("authHeader:"+authHeader);

        if (authHeader == null || !authHeader.startsWith("Bearer")) {
            //System.out.println("Missing or invalid Authorization header.");
            throw new ServletException("Missing or invalid Authorization header.");
        }

        try {
            final String token = authHeader.substring(6); // The part after "Bearer "
            final Claims claims = Jwts.parser().setSigningKey(secretKey)
                .parseClaimsJws(token).getBody();
            //request.setAttribute("claims", claims);
        }
        catch (final SignatureException e) {
            //throw new ServletException("Invalid token.");
            System.out.println("notSignatureInCatch");
        }catch (StringIndexOutOfBoundsException e ){
            System.out.println("notLoginInCatch");
        }
        System.out.println("All ok");
        chain.doFilter(req, res);
    }

}
