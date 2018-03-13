package com.hgicreate.rno.gsm.mapper.optimize;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;


@Mapper
public interface SpotInterModulationMapper {
    @Select("select Distinct Date from cdd_Date ORDER BY 1 desc")
    List<String> querySpotDate();

    @Select("select Distinct BSC from cdd_Date")
    List<String> querySpotBsc();

    @Select("select top 5 ObjectID as CELL from sts_GSM_CELL")
    List<String> queryTop5Cell();

    @Select("select Distinct ObjectID as CELL from sts_GSM_CELL")
    List<String> queryCellOnclick();


    List<String> selectDchno(String date , String cell);

    List<String> queryInfoByCellAndDate(String date, String cell);

    void insertToSpotInterModule(List<String> list);

    long getSpotInterModulationCount(Map<String, Object> map);

    List<Map<String, Object>> querySpotInterModulationByPage(Map<String, Object> map);

    int createNewTable();
    int dropTempTable();
    String existTempTable();
}
