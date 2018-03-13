package com.hgicreate.rno.gsm.app.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface WorkOrderExtractMapper {
	
	 int countWorkOrder(Map<String, Object> map);
	
     List<Map<String, Object>> extractWorkOrder(Map<String, Object> map);
}