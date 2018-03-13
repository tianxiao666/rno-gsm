package com.hgicreate.rno.gsm.mapper.measure;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface MrrOriginalMapper {

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

	//@Cacheable(value = "MOqueryMrr")
	List<Map<String, Object>> queryMrr(Map<String, Object> map);

	int deleteMrr(String[] date);

	List<Map<String, Object>> getLevel(Map<String, Object> map);

	List<Map<String, Object>> getQuality(Map<String, Object> map);

	List<Map<String, Object>> getTA(Map<String, Object> map);

	List<Map<String, Object>> getQualityByBsc(String[] date);

	List<Map<String, Object>> getQualityByCell(String[] date);

	List<Map<String, Object>> getLevelByCell(String[] date);

	List<Map<String, Object>> getAllLevel(String[] date);

	List<Map<String, Object>> getAllQuality(String[] date);

	List<Map<String, Object>> getAllTA(String[] date);
}
