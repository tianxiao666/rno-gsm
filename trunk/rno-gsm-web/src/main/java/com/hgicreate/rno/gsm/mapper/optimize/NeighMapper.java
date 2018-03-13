package com.hgicreate.rno.gsm.mapper.optimize;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface NeighMapper {
    @Select("select top 30 Date from (select Distinct Date from rno_NCS_Date)Date ORDER BY 1 desc")
    List<String> queryStsDate();

    @Select("select top 5 BSC from rno_NCS_Date")
    List<String> queryBscDate();

    @Select("select top 5 ObjectID as CELL from sts_GSM_CELL")
    List<String> queryGsmCell();
    
    @Select("select Distinct Date from rno_NCS_Date order by 1 desc")
    List<String> queryAllDate();

    @Select("select Distinct BSC from rno_NCS_Date")
    List<String> queryAllBsc();

    @Select("select Distinct ObjectID as CELL from sts_GSM_CELL")
    List<String> queryAllGsmCell();


    List<Map<String, Object>> exportNeigh(Map<String, Object> map);
    
    long getNeighCount(Map<String, Object> map);
    
    List<Map<String, Object>> queryNeighByPage(Map<String, Object> map);
}
