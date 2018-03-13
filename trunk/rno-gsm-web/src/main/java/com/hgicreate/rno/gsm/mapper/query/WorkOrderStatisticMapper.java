package com.hgicreate.rno.gsm.mapper.query;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface WorkOrderStatisticMapper {

    @Select("select Distinct Date from sts_Date ORDER BY 1 desc")
    List<String> selectDate();

    @Select("select distinct top 5 Date from sts_Date order by 1 desc")
    List<String> selectTop5Date();

    List<String> selectMaintain(Map<String,Object> map);

    long countWorkOrder(Map<String,Object> map);

    String existWorkOrderTable(@Param("date")String date);

    List<String> selectIndicators(Map<String,Object> map);

    List<String> selectCounties(Map<String,Object> map);
}
