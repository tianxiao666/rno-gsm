package com.hgicreate.rno.gsm.service.optimize;

import com.hgicreate.rno.gsm.model.Page;

import java.util.List;
import java.util.Map;

public interface StructureIndexService {
    /**
     *  分页查询StructureIndex,结构指数
     */
    public List<Map<String, Object>> queryStructureIndexByPage(Map<String, Object> condition, Page page);
}
