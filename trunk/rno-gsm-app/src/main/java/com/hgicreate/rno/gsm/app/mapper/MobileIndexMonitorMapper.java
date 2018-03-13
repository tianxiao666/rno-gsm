package com.hgicreate.rno.gsm.app.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MobileIndexMonitorMapper {

    List<Map<String,Object>> selectZeroTeleTraffic(Map<String, Object> map);

    List<Map<String,Object>> selectZeroFlow(Map<String, Object> map);

    List<Map<String,Object>> selectA1A2(Map<String, Object> map);

    List<Map<String,Object>> selectIcm(Map<String, Object> map);

    List<Map<String,Object>> selectRxmfp(Map<String, Object> map);

    List<Map<String,Object>> selectSqi(Map<String, Object> map);

    List<Map<String,Object>> selectScallDrop(Map<String, Object> map);

    List<Map<String,Object>> selectScrowd(Map<String, Object> map);

    List<Map<String,Object>> selectTbf(Map<String, Object> map);

    List<Map<String,Object>> selectTransportChainScission(Map<String, Object> map);

    List<Map<String,Object>> selectFallSiteBcch(Map<String, Object> map);

    List<Map<String,Object>> selectCallDrop(Map<String, Object> map);

    List<Map<String,Object>> selectPitchOut(Map<String, Object> map);

    List<Map<String,Object>> selectPitchIn(Map<String, Object> map);

    List<Map<String,Object>> selectWirelessAccess(Map<String, Object> map);

    List<Map<String,Object>> selectErrorSlideCode(Map<String, Object> map);

    List<Map<String,Object>> selectChannelWellRate(Map<String, Object> map);

    List<Map<String,Object>> selectPagingCrowd(Map<String, Object> map);

    List<Map<String,Object>> selectCrowd(Map<String, Object> map);

    List<Map<String,Object>> selectQuality(Map<String, Object> map);

    List<Map<String,Object>> selectIndex(Map<String, Object> map);
}
