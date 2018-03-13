package com.hgicreate.rno.gsm.mapper.measure;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface NcsMapper {

    @Select("select top 30 Date from (select Distinct Date from rno_NCS_Date)NCS ORDER BY 1 desc")
    List<String> selectNcsDownDate();

    @Select("select Distinct BSC from rno_NCS_Date")
    List<String> selectNcsDownBsc();

    @Select("select TOP 5 ObjectID from sts_GSM_CELL order by 1")
    List<String> selectNcsDownCell();

    @Select("select Distinct Date from rno_NCS_Date order by 1 desc")
    List<String> selectNcsMultiDate();

    @Select("select Distinct BSC from rno_NCS_Date order by 1 desc")
    List<String> selectNcsMultiBsc();

    @Select("select Distinct ObjectID from sts_GSM_CELL order by 1")
    List<String> selectNcsMultiCell();

    long selectNcsCount(Map<String,Object> map);

    List<Map<String,Object>> selectNcsByPage(Map<String,Object> map);


    List<Map<String,Object>> selectNcsChartData(Map<String,Object> map);


    List<Map<String,Object>> selectBcchDch(Map<String,Object> map);

    List<Map<String,Object>> exportData(Map<String,Object> map);


}
