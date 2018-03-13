package com.hgicreate.rno.gsm.mapper.measure;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface FasMapper {
    @Select("select top 30 Date FROM (select Distinct Date from rno_FAS_Date)FAS ORDER BY 1 desc")
    List<String> queryStsDate();

    @Select("select top 5 BSC FROM (select Distinct BSC from rno_FAS_Date)FAS ORDER BY 1 desc")
    List<String> queryBscDate();

    @Select("select TOP 5 ObjectID from sts_GSM_CELL order by 1")
    List<String> queryCellData();

    @Select("select Distinct Date from rno_FAS_Date order by 1 desc")
    List<String> queryAllDate();

    @Select("select Distinct BSC from rno_FAS_Date order by 1 desc")
    List<String> queryAllBsc();

    @Select("select ObjectID from sts_GSM_CELL order by 1")
    List<String> queryAllCell();

    List<Map<String, Object>> queryFAS(Map<String, Object> map);

    List<Map<String, Object>> queryFASByPage(Map<String, Object> map);

    List<Map<String, Object>> getChartA(Map<String, Object> map);
    List<Map<String, Object>> getChartB(Map<String, Object> map);

    List<Map<String, Object>> exportFAS(Map<String, Object> map);

}
