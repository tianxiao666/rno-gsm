package com.hgicreate.rno.gsm.app.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;


@Mapper
public interface WorkOrderStatisticsMapper {

    long calculateStatisticResult(Map<String, Object> map);

    long countWorkOrderToday(Map<String, Object> map);

    long countWorkOrderHistory(Map<String, Object> map);

    List<String> selectWorkOrderIds(Map<String,Object> map);

}
