package com.hgicreate.rno.gsm.mapper.query;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface IdleTransmissionMapper {

	@Select("select top 30 Date from (select Distinct Date from cdd_Date)alarm ORDER BY 1 desc")
	List<String> get30Date();

	@Select("select Distinct Date from cdd_Date order by 1 desc")
	List<String> getAllDate();

	@Select("select Distinct BSC from cdd_Date")
	List<String> getBsc();

	@Select("select top 5 ObjectID from sts_GSM_CELL")
	List<String> get5Cell();

	@Select("select Distinct ObjectID from sts_GSM_CELL")
	List<String> getAllCell();

	//@Cacheable(value = "ITqueryIdleTransmission")
	List<Map<String, Object>> queryIdleTransmission(Map<String, Object> map);

	//@Cacheable(value = "ITcalIdleTransmission")
	List<Map<String, Object>> calIdleTransmission(Map<String, Object> map);
}
