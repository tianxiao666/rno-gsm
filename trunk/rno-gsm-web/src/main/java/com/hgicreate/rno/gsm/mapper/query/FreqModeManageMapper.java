package com.hgicreate.rno.gsm.mapper.query;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface FreqModeManageMapper {

    @Select("select count(*) from (select 名称,频段,BCCH,TCH,EGSM from fre_Model) as freqMode")
    long selectFreqModeCount(Map<String,Object> map);

    List<Map<String,Object>> selectFreqMode(Map<String,Object> map);

    List<Map<String,Object>> selectFreqModeByPage(Map<String,Object> map);
}
