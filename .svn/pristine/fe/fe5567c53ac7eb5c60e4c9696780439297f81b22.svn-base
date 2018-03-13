package com.hgicreate.rno.gsm.app.controller;

import com.hgicreate.rno.gsm.app.mapper.WorkOrderStatisticsMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@CrossOrigin
public class WorkOrderStatisticsController {
    private static final Logger logger = LoggerFactory.getLogger(WorkOrderStatisticsController.class);
    private final WorkOrderStatisticsMapper workOrderStatisticsMapper;

    public WorkOrderStatisticsController(WorkOrderStatisticsMapper workOrderStatisticsMapper) {
        this.workOrderStatisticsMapper = workOrderStatisticsMapper;
    }

    @GetMapping("/getWorkOrderStatistics")
    List<Map<String, Object>> getWorkOrderStatistics(HttpServletRequest request, HttpServletResponse response) {

        String county,subMaintain, beginTime, endTime,questionType,frequency;
        logger.debug("getWorkOrderStatistics，地区={}，代维={}，开始时间={}，结束时间={}",
                county = request.getParameter("county"),
                subMaintain = request.getParameter("subMaintain"),
                questionType=request.getParameter("questionType"),
                frequency=request.getParameter("frequency"),
                beginTime = request.getParameter("beginTime").replace("-", ""),
                endTime = request.getParameter("endTime").replace("-", ""));
        if(questionType.equals("-1")){
            questionType=null;
        }
        if(frequency.trim().equals("")){
            frequency=null;
        }

       List<Map<String,Object>> resultList=new ArrayList<>();
       Map<String,Object> resultMap = new LinkedHashMap<>();
       String[] counties={"徐闻","麻章","坡头","廉江","吴川","赤坎","霞山","雷州","遂溪"};
        Date today=new Date();
        Date dBefore = new Date();
        Calendar calendar = Calendar.getInstance(); //得到日历
        calendar.setTime(today);//把当前时间赋给日历
        calendar.add(Calendar.DAY_OF_MONTH, -1);  //设置为前一天
        dBefore = calendar.getTime();   //得到前一天的时间

        SimpleDateFormat sdf=new SimpleDateFormat("yyyyMMdd");
        //设置时间格式
        String dateToday=sdf.format(today);
        String date = sdf.format(dBefore);    //格式化前一天
        Map<String,Object> cond=new HashMap<>();

       if(county.equals("-1")){
           if(subMaintain.equals("-1")){
               cond=new HashMap<>();
                   cond.put("beginTime",Integer.parseInt(beginTime));
                   cond.put("endTime",Integer.parseInt(endTime));
                   cond.put("questionType",questionType);
                   cond.put("frequency",frequency);

                    for(String counti :counties){
                        int countToday=0;
                        int countHistory=0;
                        int countTotal=0;
                        int countFinished=0;
                        resultMap=new LinkedHashMap<>();
                        cond.put("county",counti);
                        if(endTime.equals(dateToday)){
                            countToday=(int)workOrderStatisticsMapper.countWorkOrderToday(cond);
                        }
                        countHistory=(int)workOrderStatisticsMapper.countWorkOrderHistory(cond);
                        countTotal=countHistory+countToday;
                        List<String> workOrderIdList=workOrderStatisticsMapper.selectWorkOrderIds(cond);
                        if(workOrderIdList.size()>0){
                            cond.put("workOrderIds", workOrderIdList);
                            countFinished=(int)workOrderStatisticsMapper.calculateStatisticResult(cond);
                        }
                        resultMap.put("片区",counti);
                        if(countTotal==0){
                            resultMap.put("已完成数",0);
                            resultMap.put("未完成数",0);
                            resultMap.put("总数",0);
                            resultMap.put("完成率",0.0);
                        }else{
                            resultMap.put("已完成数",countFinished);
                            resultMap.put("未完成数",countTotal-countFinished);
                            resultMap.put("总数",countTotal);
                            resultMap.put("完成率",((double)countFinished/countTotal*100));
                        }
                        resultList.add(resultMap);
                    }
           }else{
               cond=new HashMap<>();
               cond.put("maintain",subMaintain);
               cond.put("questionType",questionType);
               cond.put("frequency",frequency);
               cond.put("beginTime",Integer.parseInt(beginTime));
               cond.put("endTime",Integer.parseInt(endTime));
               for(String counti :counties) {
                   int countToday=0;
                   int countHistory=0;
                   int countTotal=0;
                   int countFinished=0;
                   resultMap=new LinkedHashMap<>();
                   cond.put("county",counti);
                   if(endTime.equals(dateToday)){
                       countToday=(int)workOrderStatisticsMapper.countWorkOrderToday(cond);
                   }
                   countHistory = (int) workOrderStatisticsMapper.countWorkOrderHistory(cond);
                   countTotal=countToday+countHistory;
                   List<String> workOrderIdList = workOrderStatisticsMapper.selectWorkOrderIds(cond);
                   if(workOrderIdList.size()>0){
                       cond.put("workOrderIds", workOrderIdList);
                       countFinished = (int) workOrderStatisticsMapper.calculateStatisticResult(cond);
                   }
                   resultMap.put("片区",counti);
                   if(countTotal==0){
                       resultMap.put("已完成数",0);
                       resultMap.put("未完成数",0);
                       resultMap.put("总数",0);
                       resultMap.put("完成率","0.00%");
                   }else{
                       resultMap.put("已完成数",countFinished);
                       resultMap.put("未完成数",countTotal-countFinished);
                       resultMap.put("总数",countTotal);
                       resultMap.put("完成率",(double)countFinished/countTotal*100);
                   }
                   resultList.add(resultMap);
               }
           }
       }else{
           if(subMaintain.equals("-1")){
               int countToday=0;
               int countHistory=0;
               int countTotal=0;
               int countFinished=0;
               resultMap=new LinkedHashMap<>();
               cond=new HashMap<>();
               cond.put("county",county);
               cond.put("questionType",questionType);
               cond.put("frequency",frequency);
               cond.put("beginTime",Integer.parseInt(beginTime));
               cond.put("endTime",Integer.parseInt(endTime));
               if(endTime.equals(dateToday)){
                   countToday=(int)workOrderStatisticsMapper.countWorkOrderToday(cond);
               }
               countHistory=(int)workOrderStatisticsMapper.countWorkOrderHistory(cond);
               countTotal=countToday+countHistory;
               List<String> workOrderIdList = workOrderStatisticsMapper.selectWorkOrderIds(cond);
               if(workOrderIdList.size()>0){
                   cond.put("workOrderIds", workOrderIdList);
                   countFinished = (int) workOrderStatisticsMapper.calculateStatisticResult(cond);
               }
               resultMap.put("片区",county);
               if(countTotal==0){
                   resultMap.put("已完成数",0);
                   resultMap.put("未完成数",0);
                   resultMap.put("总数",0);
                   resultMap.put("完成率","0.00%");
               }else{
                   resultMap.put("已完成数",countFinished);
                   resultMap.put("未完成数",countTotal-countFinished);
                   resultMap.put("总数",countTotal);
                   resultMap.put("完成率",(double)countFinished/countTotal*100);
               }
               resultList.add(resultMap);
           }else{
               int countToday=0;
               int countHistory=0;
               int countTotal=0;
               int countFinished=0;
               resultMap=new LinkedHashMap<>();
               cond=new HashMap<>();
               cond.put("county",county);
               cond.put("maintain",subMaintain);
               cond.put("questionType",questionType);
               cond.put("frequency",frequency);
               cond.put("beginTime",Integer.parseInt(beginTime));
               cond.put("endTime",Integer.parseInt(endTime));

               if(endTime.equals(dateToday)){
                   countToday=(int)workOrderStatisticsMapper.countWorkOrderToday(cond);
               }
               countHistory=(int)workOrderStatisticsMapper.countWorkOrderHistory(cond);
               countTotal=countToday+countHistory;
               List<String> workOrderIdList = workOrderStatisticsMapper.selectWorkOrderIds(cond);
               if(workOrderIdList.size()>0){
                    cond.put("workOrderIds", workOrderIdList);
                   countFinished = (int) workOrderStatisticsMapper.calculateStatisticResult(cond);
               }

               resultMap.put("片区",county);
               if(countTotal==0){
                   resultMap.put("已完成数",0);
                   resultMap.put("未完成数",0);
                   resultMap.put("总数",0);
                   resultMap.put("完成率","0.00%");
               }else{
                   resultMap.put("已完成数",countFinished);
                   resultMap.put("未完成数",countTotal-countFinished);
                   resultMap.put("总数",countTotal);
                   resultMap.put("完成率",(double)countFinished/countTotal*100);
               }
               resultList.add(resultMap);
           }
       }
       int countCityToday=0;
       int countCityHistory=0;
       int countCityTotal=0;
       int countCityFinished=0;
       Map<String,Object> cityMapCond=new HashMap<>();
       cityMapCond.put("beginTime",Integer.parseInt(beginTime));
       cityMapCond.put("endTime",Integer.parseInt(endTime));
       if(!subMaintain.equals("-1")){
           cityMapCond.put("maintain",subMaintain);
       }
       cityMapCond.put("questionType",questionType);
       cityMapCond.put("frequency",frequency);
       if(endTime.equals(dateToday)){
           countCityToday=(int)workOrderStatisticsMapper.countWorkOrderToday(cityMapCond);
       }
       countCityHistory=(int)workOrderStatisticsMapper.countWorkOrderHistory(cityMapCond);
       countCityTotal=countCityToday+countCityHistory;
        Map<String,Object> resultMapTotal = new LinkedHashMap<>();
       resultMapTotal.put("片区","全市");

       List<String> workOrderIdCityList=workOrderStatisticsMapper.selectWorkOrderIds(cityMapCond);
       if(workOrderIdCityList.size()>0){
           cityMapCond.put("workOrderIds",workOrderIdCityList);
           countCityFinished=(int)workOrderStatisticsMapper.calculateStatisticResult(cityMapCond);
       }
        if(countCityTotal==0){
            resultMapTotal.put("已完成数",0);
            resultMapTotal.put("未完成数",0);
            resultMapTotal.put("总数",0);
            resultMapTotal.put("完成率",0);
        }else{
            resultMapTotal.put("已完成数",countCityFinished);
            resultMapTotal.put("未完成数",countCityTotal-countCityFinished);
            resultMapTotal.put("总数",countCityTotal);
            resultMapTotal.put("完成率",(double)countCityFinished/countCityTotal*100);
        }
       resultList.add(resultMapTotal);
       logger.debug("---------------------------------输出结果为resultList={}"+resultList);
       return resultList;
    }

}