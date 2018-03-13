package com.hgicreate.rno.gsm.mapper.optimize;


import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface AccordanceCheckMapper {

    @Select("select top 30 Date from (select Distinct Date from cdd_Date)d ORDER BY 1 desc")
    List<String> selectCddDate();

    List<String> selectSpotLackCell(Map<String,Object> map);

    long selectCbYesCount(Map<String,Object> map);

    List<Map<String,Object>> selectCbYes(Map<String,Object> map);

    List<Map<String,Object>> selectCbYesByPage(Map<String,Object> map);

    long selectEcscNoCount(Map<String,Object> map);

    List<Map<String,Object>> selectEcscNo(Map<String,Object> map);

    List<Map<String,Object>> selectEcscNoByPage(Map<String,Object> map);

    long selectGprsupNoCount(Map<String,Object> map);

    List<Map<String,Object>> selectGprsupNo(Map<String,Object> map);

    List<Map<String,Object>> selectGprsupNoByPage(Map<String,Object> map);

    long selectInnerOuterExceptionCount(Map<String,Object> map);

    List<Map<String,Object>> selectInnerOuterException(Map<String,Object> map);

    List<Map<String,Object>> selectInnerOuterExceptionByPage(Map<String,Object> map);

    long selectTxExceptionCount(Map<String,Object> map);

    List<Map<String,Object>> selectTxException(Map<String,Object> map);

    List<Map<String,Object>> selectTxExceptionByPage(Map<String,Object> map);

    long selectTrxExceptionCount(Map<String,Object> map);

    List<Map<String,Object>> selectTrxException(Map<String,Object> map);

    List<Map<String,Object>> selectTrxExceptionByPage(Map<String,Object> map);

    long selectTransportExceptionCount(Map<String,Object> map);

    List<Map<String,Object>> selectTransportException(Map<String,Object> map);

    List<Map<String,Object>> selectTransportExceptionByPage(Map<String,Object> map);

    long selectBaTableCount(Map<String,Object> map);

    List<Map<String,Object>> selectBaTable(Map<String,Object> map);

    List<Map<String,Object>> selectBaTableByPage(Map<String,Object> map);

    long selectNeighborCount(Map<String,Object> map);

    List<Map<String,Object>> selectNeighbor(Map<String,Object> map);

    List<Map<String,Object>> selectNeighborByPage(Map<String,Object> map);

    long selectSpotLackDefCount(Map<String,Object> map);

    List<Map<String,Object>> selectSpotLackDef(Map<String,Object> map);

    List<Map<String,Object>> selectSpotLackDefByPage(Map<String,Object> map);

    long selectCduSpotCount(Map<String,Object> map);

    List<Map<String,Object>> selectCduSpot(Map<String,Object> map);

    List<Map<String,Object>> selectCduSpotByPage(Map<String,Object> map);

    long selectBspwrtCount(Map<String,Object> map);

    List<Map<String,Object>> selectBspwrt(Map<String,Object> map);

    List<Map<String,Object>> selectBspwrtByPage(Map<String,Object> map);

    long calculateCbYesCount(Map<String,Object> map);

    List<Map<String,Object>> calculateCbYes(Map<String,Object> map);

    List<Map<String,Object>> calculateCbYesByPage(Map<String,Object> map);

    long calculateEcscNoCount(Map<String,Object> map);

    List<Map<String,Object>> calculateEcscNo(Map<String,Object> map);

    List<Map<String,Object>> calculateEcscNoByPage(Map<String,Object> map);

    long calculateGprsupNoCount(Map<String,Object> map);

    List<Map<String,Object>> calculateGprsupNo(Map<String,Object> map);

    List<Map<String,Object>> calculateGprsupNoByPage(Map<String,Object> map);

    long calculateInnerOuterExceptionCount(Map<String,Object> map);

    List<Map<String,Object>> calculateInnerOuterException(Map<String,Object> map);

    List<Map<String,Object>> calculateInnerOuterExceptionByPage(Map<String,Object> map);

    long calculateTxExceptionCount(Map<String,Object> map);

    List<Map<String,Object>> calculateTxException(Map<String,Object> map);

    List<Map<String,Object>> calculateTxExceptionByPage(Map<String,Object> map);

    long calculateTrxExceptionCount(Map<String,Object> map);

    List<Map<String,Object>> calculateTrxException(Map<String,Object> map);

    List<Map<String,Object>> calculateTrxExceptionByPage(Map<String,Object> map);

    long calculateTransportExceptionCount(Map<String,Object> map);

    List<Map<String,Object>> calculateTransportException(Map<String,Object> map);

    List<Map<String,Object>> calculateTransportExceptionByPage(Map<String,Object> map);

    long calculateBaTableCount(Map<String,Object> map);

    List<Map<String,Object>> calculateBaTable(Map<String,Object> map);

    List<Map<String,Object>> calculateBaTableByPage(Map<String,Object> map);

    long calculateNeighborCount(Map<String,Object> map);

    List<Map<String,Object>> calculateNeighbor(Map<String,Object> map);

    List<Map<String,Object>> calculateNeighborByPage(Map<String,Object> map);

    long calculateSpotLackDefCount(Map<String,Object> map);

    List<Map<String,Object>> calculateSpotLackDef(Map<String,Object> map);

    List<Map<String,Object>> calculateSpotLackDefByPage(Map<String,Object> map);

    long calculateCduSpotCount(Map<String,Object> map);

    List<Map<String,Object>> calculateCduSpot(Map<String,Object> map);

    List<Map<String,Object>> calculateCduSpotByPage(Map<String,Object> map);

    long calculateBspwrtCount(Map<String,Object> map);

    List<Map<String,Object>> calculateBspwrt(Map<String,Object> map);

    List<Map<String,Object>> calculateBspwrtByPage(Map<String,Object> map);

}
