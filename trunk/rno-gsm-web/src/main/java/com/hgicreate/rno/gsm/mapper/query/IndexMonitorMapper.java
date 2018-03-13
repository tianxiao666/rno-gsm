package com.hgicreate.rno.gsm.mapper.query;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface IndexMonitorMapper {

    @Select("select Distinct BSC from temp60_CLTCH")
    List<String> selectSts60Bsc();

    @Select("select Distinct BSC from temp15_CLTCH")
    List<String> selectSts15Bsc();

    long selectCrowdCount(Map<String,Object> map);

    List<Map<String,Object>> selectCrowd(Map<String,Object> map);

    List<Map<String,Object>> selectCrowdByPage(Map<String,Object> map);

    long selectCallDropCount(Map<String,Object> map);

    List<Map<String,Object>> selectCallDrop(Map<String,Object> map);

    List<Map<String,Object>> selectCallDropByPage(Map<String,Object> map);

    long selectSqiCount(Map<String,Object> map);

    List<Map<String,Object>> selectSqi(Map<String,Object> map);

    List<Map<String,Object>> selectSqiByPage(Map<String,Object> map);

    long selectIcmCount(Map<String,Object> map);

    List<Map<String,Object>> selectIcm(Map<String,Object> map);

    List<Map<String,Object>> selectIcmByPage(Map<String,Object> map);

    long selectSIcmCount(Map<String,Object> map);

    List<Map<String,Object>> selectSIcm(Map<String,Object> map);

    List<Map<String,Object>> selectSIcmByPage(Map<String,Object> map);

    long selectSCallDropCount(Map<String,Object> map);

    List<Map<String,Object>> selectSCallDrop(Map<String,Object> map);

    List<Map<String,Object>> selectSCallDropByPage(Map<String,Object> map);

    long selectWirelessAccessCount(Map<String,Object> map);

    List<Map<String,Object>> selectWirelessAccess(Map<String,Object> map);

    List<Map<String,Object>> selectWirelessAccessByPage(Map<String,Object> map);

    long selectChannelWellRateCount(Map<String,Object> map);

    List<Map<String,Object>> selectChannelWellRate(Map<String,Object> map);

    List<Map<String,Object>> selectChannelWellRateByPage(Map<String,Object> map);

    long selectZeroTeleTrafficCount(Map<String,Object> map);

    List<Map<String,Object>> selectZeroTeleTraffic(Map<String,Object> map);

    List<Map<String,Object>> selectZeroTeleTrafficByPage(Map<String,Object> map);

    long selectZeroFlowCount(Map<String,Object> map);

    List<Map<String,Object>> selectZeroFlow(Map<String,Object> map);

    List<Map<String,Object>> selectZeroFlowByPage(Map<String,Object> map);

    long selectPitchingInCount(Map<String,Object> map);

    List<Map<String,Object>> selectPitchingIn(Map<String,Object> map);

    List<Map<String,Object>> selectPitchingInByPage(Map<String,Object> map);

    long selectPitchingOutCount(Map<String,Object> map);

    List<Map<String,Object>> selectPitchingOut(Map<String,Object> map);

    List<Map<String,Object>> selectPitchingOutByPage(Map<String,Object> map);

    long selectVoiceQualityCount(Map<String,Object> map);

    List<Map<String,Object>> selectVoiceQuality(Map<String,Object> map);

    List<Map<String,Object>> selectVoiceQualityByPage(Map<String,Object> map);

    long selectTbfEstablishCount(Map<String,Object> map);

    List<Map<String,Object>> selectTbfEstablish(Map<String,Object> map);

    List<Map<String,Object>> selectTbfEstablishByPage(Map<String,Object> map);

    long selectTransportChainScissionCount(Map<String,Object> map);

    List<Map<String,Object>> selectTransportChainScission(Map<String,Object> map);

    List<Map<String,Object>> selectTransportChainScissionByPage(Map<String,Object> map);

    long selectErrorSlideCodeCount(Map<String,Object> map);

    List<Map<String,Object>> selectErrorSlideCode(Map<String,Object> map);

    List<Map<String,Object>> selectErrorSlideCodeByPage(Map<String,Object> map);

    long selectBcchCount(Map<String,Object> map);

    List<Map<String,Object>> selectBcch(Map<String,Object> map);

    List<Map<String,Object>> selectBcchByPage(Map<String,Object> map);

    long selectA1A2Count(Map<String,Object> map);

    List<Map<String,Object>> selectA1A2(Map<String,Object> map);

    List<Map<String,Object>> selectA1A2ByPage(Map<String,Object> map);

    long selectRxmfpCount(Map<String,Object> map);

    List<Map<String,Object>> selectRxmfp(Map<String,Object> map);

    List<Map<String,Object>> selectRxmfpByPage(Map<String,Object> map);

    long selectPagingCrowdCount(Map<String,Object> map);

    List<Map<String,Object>> selectPagingCrowd(Map<String,Object> map);

    List<Map<String,Object>> selectPagingCrowdByPage(Map<String,Object> map);
}
