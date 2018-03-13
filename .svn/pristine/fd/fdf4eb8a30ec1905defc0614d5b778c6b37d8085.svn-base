package com.hgicreate.rno.gsm.mapper.measure;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface MrrQualityMapper {

	@Select("select top 30 Date from (select Distinct Date from rno_MRR_Date)TA ORDER BY 1 desc")
	List<String> get30Date();

	@Select("select Distinct Date from rno_MRR_Date order by 1 desc")
	List<String> getAllDate();

	@Select("select Distinct BSC from rno_MRR_Date")
	List<String> getBsc();

	@Select("select top 5 ObjectID from sts_GSM_CELL")
	List<String> get5Cell();

	@Select("select Distinct ObjectID from sts_GSM_CELL")
	List<String> getAllCell();

	List<Map<String, Object>> getQualityByCell(Map<String, Object> map);

	List<Map<String, Object>> getQualityByBsc(Map<String, Object> map);

	List<Map<String, Object>> getQualityByDate(Map<String, Object> map);

	List<Map<String, Object>> getQualityByAll(Map<String, Object> map);
}
