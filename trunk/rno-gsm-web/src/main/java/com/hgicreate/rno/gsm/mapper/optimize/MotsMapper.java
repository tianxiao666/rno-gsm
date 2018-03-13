package com.hgicreate.rno.gsm.mapper.optimize;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface MotsMapper {
	@Select("select Distinct Date from sts_Date order by 1 desc")
	List<String> queryStsDate();

	@Select("select top 5 ObjectID as CELL from sts_GSM_CELL")
	List<String> queryGsmCell();

	@Select("select Distinct ObjectID from sts_GSM_CELL order by 1")
	List<String> queryAllGsmCell();

	//@Cacheable(value = "MAqueryMots")
	List<Map<String, Object>> queryMots(Map<String, Object> map);
}
