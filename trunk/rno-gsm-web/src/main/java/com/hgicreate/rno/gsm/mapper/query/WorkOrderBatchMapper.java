package com.hgicreate.rno.gsm.mapper.query;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.security.access.method.P;


@Mapper
public interface WorkOrderBatchMapper {

    @Select("select count(*) from rno_gsm_work_order_review where work_order_id=#{order}")
    int ifExitsThisOrder(@Param("order")String order);

    int updateWorkOrderBatch(@Param("order")String order,
                             @Param("handler")String handler,
                             @Param("treatment")String treatment,
                             @Param("treatResult")String treatResult,
                             @Param("admin")String admin,
                             @Param("status")String status);

    int insertWorkOrderBatch(@Param("order")String order,
                             @Param("handler")String handler,
                             @Param("treatment")String treatment,
                             @Param("treatResult")String treatResult,
                             @Param("admin")String admin,
                             @Param("status")String status);

    int updateWorkOrderBatchAdmin(@Param("order")String order,
                             @Param("handleCount")String handleCount,
                             @Param("status")String status,
                             @Param("admin")String admin);

    int insertWorkOrderBatchAdmin(@Param("order")String order,
                             @Param("handleCount")String handleCount,
                             @Param("status")String status,
                             @Param("admin")String admin);
}
