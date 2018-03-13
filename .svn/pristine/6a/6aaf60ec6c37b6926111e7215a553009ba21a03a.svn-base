package com.hgicreate.rno.gsm.app.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface WorkOrderBatchMapper {

    @Select("select count(*) from rno_gsm_work_order_review where work_order_id=#{order}")
    int ifExitsThisOrder(@Param("order")String order);

    int updateWorkOrderBatch(@Param("order")String order,
                             @Param("handler")String handler,
                             @Param("treatment")String treatment,
                             @Param("treatResult")String treatResult);

    int insertWorkOrderBatch(@Param("order")String order,
                             @Param("handler")String handler,
                             @Param("treatment")String treatment,
                             @Param("treatResult")String treatResult);
}
