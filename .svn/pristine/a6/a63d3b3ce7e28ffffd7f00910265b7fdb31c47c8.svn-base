package com.hgicreate.rno.gsm.mapper.query;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface FrequencyReuseMapper {
    @Select("select top 30 Date from (select Distinct Date from cdd_Date)d ORDER BY 1 desc")
    List<String> queryStsDate();

    @Select("select top 5 BSC from cdd_Date")
    List<String> queryBscDate();

    @Select("select Distinct BSC from cdd_Date")
    List<String> queryAllBsc();

    List<Map<String, Object>> queryFrequencyReuse(Map<String, Object> map);

}
