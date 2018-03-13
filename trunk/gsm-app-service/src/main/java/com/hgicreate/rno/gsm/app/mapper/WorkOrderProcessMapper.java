package com.hgicreate.rno.gsm.app.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

/**
 * Created by yangch on 2017/7/4.
 */
@Mapper
public interface WorkOrderProcessMapper {
    List<Map<String, Object>> getWorkOrder(Map<String, Object> map);

    Map<String, Object> getDetailById(@Param("order")String order);

    @Select("select count(*) from rno_gsm_work_order_review where work_order_id=#{order}")
    int ifExitsThisOrder(@Param("order")String order);

    int updateReviewTab(@Param("order")String order, @Param("handler")String handler, @Param("treatment")String treatment,@Param("treatResult")String treatResult);

    int insertReviewTab(@Param("order")String order, @Param("handler")String handler, @Param("treatment")String treatment,@Param("treatResult")String treatResult);
}
