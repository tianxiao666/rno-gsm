package com.hgicreate.rno.gsm.mapper.optimize;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface SameNeiborFreqCheckMapper {

	@Select("select top 30 Date from (select Distinct Date from cdd_Date)d ORDER BY 1 desc")
	List<String> queryDate();

	@Select("select top 5 ObjectID as CELL from sts_GSM_CELL")
	List<String> queryCell();

	@Select("select ObjectID as CELL from sts_GSM_CELL")
	List<String> queryAllCell();

	@Select("select Distinct top 5 BSC from cdd_Date")
	List<String> queryBsc();

	@Select("select Distinct BSC from cdd_Date")
	List<String> queryAllBsc();

	//@Cacheable(value = "SNFCquerySnf")
	List<Map<String, Object>> querySnf(Map<String, Object> map);

	List<Map<String, Object>> get3KMCell(@Param("date") String date, @Param("cell") String cell,
			@Param("bsc") List<String> bsc);

	List<String> getDchno(@Param("date") String date, @Param("cell") String cell);

	List<Map<String, Object>> getCheckCellInfo(Map<String, Object> map);
}
