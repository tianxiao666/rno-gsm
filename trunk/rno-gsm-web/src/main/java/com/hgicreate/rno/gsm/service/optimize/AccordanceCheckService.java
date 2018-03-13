package com.hgicreate.rno.gsm.service.optimize;

import com.hgicreate.rno.gsm.model.Page;

import java.util.List;
import java.util.Map;


public interface AccordanceCheckService {

    /**
     *分页计算一致性检查
     */
    List<Map<String,Object>> calculateAccordanceByPage(Map<String,Object> condition,Page page,String order) throws Exception;

    /**
     *分页查询一致性检查
     */
    List<Map<String, Object>> inquireAccordanceByPage(Map<String, Object> condition, Page page,String order) throws Exception;

}
