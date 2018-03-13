package com.hgicreate.rno.gsm.repo;


import com.hgicreate.rno.gsm.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long>{
    List<User> findByTypeOrderByIdDesc(@Param("type")int type);
    User findByUsername(@Param("username")String username);
    User findByChineseName(@Param("chineseName")String chineseName);
}
