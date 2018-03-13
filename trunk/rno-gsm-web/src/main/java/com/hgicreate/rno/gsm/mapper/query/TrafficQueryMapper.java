package com.hgicreate.rno.gsm.mapper.query;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface TrafficQueryMapper {

	@Select("select top 30 Date from (select Distinct Date from sts_Date)Date ORDER BY 1 desc")
	List<String> get30Date();

	@Select("select Distinct Date from sts_Date order by 1 desc")
	List<String> getAllDate();

	@Select("select Distinct BSC from sts_Date")
	List<String> getBsc();

	@Select("select top 5 ObjectID from sts_GSM_CELL")
	List<String> get5Cell();

	@Select("select Distinct ObjectID from sts_GSM_CELL")
	List<String> getAllCell();

	@Select("select *  from huaWuMoBan")
	List<String> getCommonTemplate();

	@Select("select *  from juHeMoBan")
	List<String> getAggregationTemplate();

	@Select("select 指标 from moBan_话务")
	List<String> getTrafficIndex();

	List<String> getIndexByTemplate(@Param("template") String template);

	//@Cacheable(value = "TQtraffic")
	List<Map<String, Object>> showTrafficTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQdriveInAndOut")
	List<Map<String, Object>> showDriveInAndOutTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQswitchPointToPoint")
	List<Map<String, Object>> showSwitchPointToPointTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQdata")
	List<Map<String, Object>> showDataTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQwirelessUtilization")
	List<Map<String, Object>> showWirelessUtilizationTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQquality")
	List<Map<String, Object>> showQualityTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQaggregationBSCSTraffic")
	List<Map<String, Object>> showAggregationBSCSTrafficTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQaggregationBSCTraffic")
	List<Map<String, Object>> showAggregationBSCTrafficTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQaggregationBSCData")
	List<Map<String, Object>> showAggregationBSCDataTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQaggregationCELLSTraffic")
	List<Map<String, Object>> showAggregationCELLSTrafficTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQaggregationCELLTraffic")
	List<Map<String, Object>> showAggregationCELLTrafficTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQaggregationCELLDriveInAndOut")
	List<Map<String, Object>> showAggregationCELLDriveInAndOutTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQaggregationCELLSwitchPointToPoint")
	List<Map<String, Object>> showAggregationCELLSwitchPointToPointTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQaggregationCELLData")
	List<Map<String, Object>> showAggregationCELLDataTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQaggregationDateSTraffic")
	List<Map<String, Object>> showAggregationDateSTrafficTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQaggregationDateTraffic")
	List<Map<String, Object>> showAggregationDateTrafficTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQaggregationDateData")
	List<Map<String, Object>> showAggregationDateDataTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQaggregationTimeSTraffic")
	List<Map<String, Object>> showAggregationTimeSTrafficTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQaggregationTimeTraffic")
	List<Map<String, Object>> showAggregationTimeTrafficTemplateTab(Map<String, Object> map);

	//@Cacheable(value = "TQaggregationTimeData")
	List<Map<String, Object>> showAggregationTimeDataTemplateTab(Map<String, Object> map);
}
