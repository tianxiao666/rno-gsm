package com.hgicreate.rno.gsm.mapper.optimize;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;


@Mapper
public interface StructureIndexMapper {

    @Select("select top 30 Date from (select Distinct Date from rno_NCS_Date) NCS ORDER BY 1 desc")
    List<String> queryNcs30Date();

    @Select("select Distinct Date from rno_NCS_Date order by 1 desc")
    List<String> queryNcsDate();

    @Select("select Distinct BSC from rno_NCS_Date")
    List<String> queryNcsBsc();

    long getStructureIndexCount(Map<String, Object> map);

    List<Map<String, Object>> queryStructureIndexByPage(Map<String, Object> map);

    List<Map<String, Object>> exportStructureIndex(Map<String, Object> map);

}
