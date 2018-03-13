package com.hgicreate.rno.gsm.mapper.query;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface IndicatorDiagramMapper {
    @Select("select top 30 Date from (select Distinct Date from sts_Date)Date ORDER BY 1 desc")
    List<String> queryStsDate();

    @Select("select top 5 BSC from sts_Date")
    List<String> queryBscDate();

    @Select("select top 5 ObjectID from sts_GSM_CELL")
    List<String> queryGsmCell();

    @Select("select * from zhiBiaoMoBan")
    List<String> queryIndicatorTemplate();
    
    @Select("select Distinct Date from sts_Date order by 1 desc")
    List<String> queryAllDate();

    @Select("select Distinct BSC from sts_Date")
    List<String> queryAllBsc();

    @Select("select Distinct ObjectID from sts_GSM_CELL")
    List<String> queryAllGsmCell();

    //按网元
    List<Map<String, Object>> queryBSCEdge(Map<String, Object> map);
    List<Map<String, Object>> queryBSCGPRS(Map<String, Object> map);
    List<Map<String, Object>> queryBSCICM45(Map<String, Object> map);
    List<Map<String, Object>> queryBSCSQI(Map<String, Object> map);
    List<Map<String, Object>> queryBSCS(Map<String, Object> map);
    List<Map<String, Object>> queryBSCUp(Map<String, Object> map);
    List<Map<String, Object>> queryBSCAcess(Map<String, Object> map);
    List<Map<String, Object>> queryBSCDrop(Map<String, Object> map);
    List<Map<String, Object>> queryBSCDown(Map<String, Object> map);
    List<Map<String, Object>> queryBSCTatol(Map<String, Object> map);

    //按小区
    List<Map<String, Object>> queryObjectIDEdge(Map<String, Object> map);
    List<Map<String, Object>> queryObjectIDGPRS(Map<String, Object> map);
    List<Map<String, Object>> queryObjectIDICM45(Map<String, Object> map);
    List<Map<String, Object>> queryObjectIDSQI(Map<String, Object> map);
    List<Map<String, Object>> queryObjectIDS(Map<String, Object> map);
    List<Map<String, Object>> queryObjectIDUp(Map<String, Object> map);
    List<Map<String, Object>> queryObjectIDAcess(Map<String, Object> map);
    List<Map<String, Object>> queryObjectIDDrop(Map<String, Object> map);
    List<Map<String, Object>> queryObjectIDDown(Map<String, Object> map);
    List<Map<String, Object>> queryObjectIDTatol(Map<String, Object> map);

    //按日期
    List<Map<String, Object>> queryDateEdge(Map<String, Object> map);
    List<Map<String, Object>> queryDateGPRS(Map<String, Object> map);
    List<Map<String, Object>> queryDateICM45(Map<String, Object> map);
    List<Map<String, Object>> queryDateSQI(Map<String, Object> map);
    List<Map<String, Object>> queryDateS(Map<String, Object> map);
    List<Map<String, Object>> queryDateUp(Map<String, Object> map);
    List<Map<String, Object>> queryDateAcess(Map<String, Object> map);
    List<Map<String, Object>> queryDateDrop(Map<String, Object> map);
    List<Map<String, Object>> queryDateDown(Map<String, Object> map);
    List<Map<String, Object>> queryDateTatol(Map<String, Object> map);

    //按时间
    List<Map<String, Object>> queryTimeEdge(Map<String, Object> map);
    List<Map<String, Object>> queryTimeGPRS(Map<String, Object> map);
    List<Map<String, Object>> queryTimeICM45(Map<String, Object> map);
    List<Map<String, Object>> queryTimeSQI(Map<String, Object> map);
    List<Map<String, Object>> queryTimeS(Map<String, Object> map);
    List<Map<String, Object>> queryTimeUp(Map<String, Object> map);
    List<Map<String, Object>> queryTimeAcess(Map<String, Object> map);
    List<Map<String, Object>> queryTimeDrop(Map<String, Object> map);
    List<Map<String, Object>> queryTimeDown(Map<String, Object> map);
    List<Map<String, Object>> queryTimeTatol(Map<String, Object> map);

}
