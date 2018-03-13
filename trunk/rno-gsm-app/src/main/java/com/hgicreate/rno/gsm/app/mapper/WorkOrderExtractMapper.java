package com.hgicreate.rno.gsm.app.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface WorkOrderExtractMapper {
	
	 int countWorkOrder(Map<String, Object> map);
	
     List<Map<String, Object>> extractWorkOrder(Map<String, Object> map);
}