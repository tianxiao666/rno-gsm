package com.hgicreate.rno.gsm.mapper.query;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;
import java.util.Map;

@Mapper
public interface WorkOrderClosedCycleMapper {

    @Select("select Distinct Date from sts_Date ORDER BY 1 desc")
    List<String> selectDate();

    @Select("select distinct top 5 Date from sts_Date order by 1 desc")
    List<String> selectTop5Date();

    List<String> selectTop5Cell(Map<String,Object> map);

    @Select("select distinct ObjectID from sts_GSM_CELL")
    List<String> selectCell();

    @Select("select distinct ObjectID from sts_GSM_CELL where 代维=#{maintain}")
    List<String> selectCellByMaintain(@Param("maintain") String maintain);

    long selectWorkOrderCount(Map<String,Object> map);

    List<Map<String,Object>> selectWorkOrderByPage(Map<String,Object> map);

    List<Map<String,Object>> selectWorkOrderAdmin(Map<String,Object> map);

    List<Map<String,Object>> selectWorkOrderUser(Map<String,Object> map);

    @Select("select count(*) from rno_gsm_work_order_review where work_order_id=#{order}")
    int ifExitsThisOrder(@Param("order")String order);

    String existWorkOrderTable(@Param("date")String date);

    int updateWorkOrderReview(@Param("order") String order,
                              @Param("handler") String handler,
                              @Param("handleMethod")String handleMethod,
                              @Param("handleResult") String handleResult,
                              @Param("handleCount") String handleCount,
                              @Param("status") String status,
                              @Param("admin") String admin);

    int insertWorkOrderReview(@Param("order") String order,
                              @Param("handler") String handler,
                              @Param("handleMethod")String handleMethod,
                              @Param("handleResult") String handleResult,
                              @Param("handleCount") String handleCount,
                              @Param("status") String status,
                              @Param("admin") String admin);

    int updateHangUpWorkOrder(@Param("order") String order,
                              @Param("handler") String handler,
                              @Param("handleMethod")String handleMethod,
                              @Param("handleResult") String handleResult,
                              @Param("status") String status,
                              @Param("admin") String admin);

    int insertHangUpWorkOrder(@Param("order") String order,
                              @Param("handler") String handler,
                              @Param("handleMethod")String handleMethod,
                              @Param("handleResult") String handleResult,
                              @Param("status") String status,
                              @Param("admin") String admin);

    int updateWorkOrderDate(@Param("order") String order,
                            @Param("date") String date,
                            @Param("handler") String handler,
                            @Param("handleMethod")String handleMethod);

    long statisticCount(Map<String,Object> map);

    List<String> selectIndicator(@Param("date") String date);

    List<String> selectIndicators(Map<String,Object> map);

    int updateOverTime(Map<String,Object> map);

    List<String> selectWorkOrderIds(Map<String,Object> map);

    int insertWorkOrder(Map<String,Object> map);

    int updateWorkOrderStatusById(@Param("order") String order,
                                  @Param("status") String status,
                                  @Param("handler") String handler);

    int giveBackOrder(@Param("order") String order,
                      @Param("status") String status,
                      @Param("handler") String handler,
                      @Param("handleCount") String handleCount);

    int updateWorkOrderHandler(Map<String,Object> map);
}
