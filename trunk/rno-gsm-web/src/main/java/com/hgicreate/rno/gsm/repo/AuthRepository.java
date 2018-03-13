package com.hgicreate.rno.gsm.repo;

import com.hgicreate.rno.gsm.model.Auth;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AuthRepository extends JpaRepository<Auth,String>{
    List<Auth> findByAuthorityEquals(String authority);
    Auth findByUsernameEquals(String username);
}
