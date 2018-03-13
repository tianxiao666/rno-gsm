package com.hgicreate.rno.gsm.mapper.optimize;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface BsicMapper {

	@Select("select Distinct ObjectID from sts_GSM_CELL order by 1")
	List<String> queryCell();

	long getCountFromTempCell();

	long getCountFromTempBsic();

	void dropTempCell();

	void dropTempBsic();

	void insertToTempCell();

	void createTempBsic();

	Map<String, Object> preparationForBulkInsert();

	void insertToTempBsic(List<String> list);

	void updateTempCell(@Param("cell") String cell);

	List<String> checkBsic(@Param("cell") String cell, @Param("distance") int distance);

	List<String> getAvailBsic(String[] unAvailBsic);

	void updateBsic(@Param("bsic") String bsic, @Param("cell") String cell);

	long getBsicCount(List<String> list);

	List<Map<String, Object>> queryBsicByPage(Map<String, Object> map);

	List<Map<String, Object>> getBsic(List<String> cell);

}
