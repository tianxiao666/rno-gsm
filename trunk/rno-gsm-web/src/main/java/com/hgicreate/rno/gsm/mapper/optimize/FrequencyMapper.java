package com.hgicreate.rno.gsm.mapper.optimize;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface FrequencyMapper {
    @Select("select top 30 Date from (select Distinct Date from cdd_Date)d ORDER BY 1 desc")
    List<String> queryStsDate();

    @Select("select top 5 BSC from cdd_Date")
    List<String> queryBscDate();

    @Select("select top 5 ObjectID as CELL from sts_GSM_CELL")
    List<String> queryGsmCell();


    @Select("select Distinct BSC from cdd_Date")
    List<String> queryAllBsc();

    @Select("select Distinct ObjectID as CELL from sts_GSM_CELL")
    List<String> queryAllGsmCell();


    List<Map<String, Object>> cal_exportFrequency(Map<String, Object> map);
    List<Map<String, Object>> exportFrequency(Map<String, Object> map);
    
    long getFrequencyCount(Map<String, Object> map);
    long getFrequencyCounts(Map<String, Object> map);

    List<Map<String, Object>> first_CalFrequency(Map<String, Object> map);

    List<Map<String, Object>> queryFrequencyByPage(Map<String, Object> map);
    List<Map<String, Object>> calcaculateFrequencyByPage(Map<String, Object> map);
}
