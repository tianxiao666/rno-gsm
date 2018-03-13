package com.hgicreate.rno.gsm.service.optimize;

import com.hgicreate.rno.gsm.model.Page;

import java.util.List;
import java.util.Map;


public interface SpotInterModulationService {


    /**
     * 查询、去重并合并频点
     * @return 返回小区和对应的频点的map
     */
    Map<String,Object>  calculateDuplicateSpot(String date,String cell);

    /**
     * 遍历所有小区两两比较计算干扰频点,并将之与小区信息一起封装到map
     * @return 返回计算后的干扰频点
     */
    Map<String,Object> cycleCalculateSpotModulation(String date,String cell);


    /**
     * 分页查询频点互调结果
     */
    List<Map<String,Object>> querySpotInterModulationByPage(Map<String,Object> condition,Page page);

}
