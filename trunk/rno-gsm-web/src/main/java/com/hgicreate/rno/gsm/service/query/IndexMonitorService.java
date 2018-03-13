package com.hgicreate.rno.gsm.service.query;


import com.hgicreate.rno.gsm.model.Page;

import java.util.List;
import java.util.Map;

public interface IndexMonitorService {

    /**
     *分页查询指标
     */
    List<Map<String, Object>> queryIndexByPage(Map<String, Object> condition, Page page,String order) throws Exception;

}
