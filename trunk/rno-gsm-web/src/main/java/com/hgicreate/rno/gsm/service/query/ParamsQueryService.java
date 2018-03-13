package com.hgicreate.rno.gsm.service.query;


import com.hgicreate.rno.gsm.model.Page;

import java.util.List;
import java.util.Map;

public interface ParamsQueryService {

    /**
     *分页查询参数
     */
    List<Map<String, Object>> queryParamsByPage(Map<String, Object> condition, Page page,String order) throws Exception;

    /**
     * 准备查询条件
     */
    Map<String, Object> prepareCondition(Map<String, Object> condition);

}
