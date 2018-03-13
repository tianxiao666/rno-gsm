package com.hgicreate.rno.gsm.mapper.optimize;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface CapacityMapper {
    @Select("select top 30 Date from (select Distinct Date from sts_Date)Date ORDER BY 1 desc")
    List<String> queryStsDate();

    //查询特定时间供查询sql使用
    @Select("select top 1 Date from cdd_Date order by 1 desc")
    List<String> querySqlDate();

    @Select("select top 5 BSC from sts_Date")
    List<String> queryBscDate();

    @Select("select top 5 ObjectID from sts_GSM_CELL")
    List<String> queryGsmCell();
    
    @Select("select Distinct Date from sts_Date order by 1 desc")
    List<String> queryAllDate();

    @Select("select Distinct BSC from sts_Date")
    List<String> queryAllBsc();

    @Select("select Distinct ObjectID as CELL from sts_GSM_CELL")
    List<String> queryAllGsmCell();

    List<Map<String, Object>> exportCapacity(Map<String, Object> map);
    List<Map<String, Object>> exportCaculateCapacity(Map<String, Object> map);

    List<Map<String, Object>> getCapacityCount(Map<String, Object> map);
    List<Map<String, Object>> getCapacityCaculateCount(Map<String, Object> map);
    
    List<Map<String, Object>> queryCapacityByPage(Map<String, Object> map);
    List<Map<String, Object>> queryCaculateCapacityByPage(Map<String, Object> map);

}
