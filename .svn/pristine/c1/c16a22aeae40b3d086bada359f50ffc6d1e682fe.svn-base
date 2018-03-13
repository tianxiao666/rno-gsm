package com.hgicreate.rno.gsm.service.usermanage;


import com.hgicreate.rno.gsm.model.User;
import com.hgicreate.rno.gsm.repo.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {


    private UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository=userRepository;
    }


    /**
     * 保存用户到数据库中
     */
    public void save(User user) {
        userRepository.save(user);
    }

    /**
     * 获取所有普通用户（用户类型为1），用于用户管理中
     */
    public List<User> getAllNormalUsers() {
        return userRepository.findByTypeOrderByIdDesc(1);
    }

    /**
     * 获取用户对象
     */
    public User getUser(String username) {
        return userRepository.findByUsername(username);
    }

    public User getUserByChineseName(String chineseName){
        return  userRepository.findByChineseName(chineseName);
    }
}
