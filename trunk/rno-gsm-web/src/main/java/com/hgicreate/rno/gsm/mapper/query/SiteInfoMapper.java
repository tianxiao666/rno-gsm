package com.hgicreate.rno.gsm.mapper.query;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface SiteInfoMapper {

    long selectSiteInfoCount(Map<String,Object> map);

    List<Map<String,Object>> selectSiteInfo(Map<String,Object> map);

    List<Map<String,Object>> selectSiteInfoByPage(Map<String,Object> map);

}
