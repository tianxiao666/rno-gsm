package com.hgicreate.rno.gsm.controller.query;

import com.hgicreate.rno.gsm.constant.GsmConstant;
import com.hgicreate.rno.gsm.mapper.query.WorkOrderStatisticMapper;
import com.hgicreate.rno.gsm.model.Page;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@RestController
@RequestMapping("/workOrderStatistic")
public class WorkOrderStatisticController {

    private static final Logger logger = LoggerFactory.getLogger(WorkOrderStatisticController.class);

    private WorkOrderStatisticMapper workOrderStatisticMapper;

    public WorkOrderStatisticController(WorkOrderStatisticMapper workOrderStatisticMapper){
        this.workOrderStatisticMapper=workOrderStatisticMapper;
    }

    @GetMapping("/page")
    public ModelAndView index(Map<String,Object> model){

        List<String> dateShowList=workOrderStatisticMapper.selectTop5Date();
        model.put("date",dateShowList);
        List<String> dateList=workOrderStatisticMapper.selectDate();
        List<String> datesList=new ArrayList<>();
        Map<String,Object> cond=new HashMap<>();
        List<String> dateResList=new ArrayList<>();
        for(String oneDate :dateList){
            if(workOrderStatisticMapper.existWorkOrderTable(oneDate) !=null){
                dateResList.add(oneDate);
            }
        }
        cond.put("dates",dateResList);
        model.put("indicator",workOrderStatisticMapper.selectIndicators(cond));
        List<String> maintainList=workOrderStatisticMapper.selectMaintain(cond);
        maintainList.removeIf(s -> s.trim().equals(""));
        model.put("maintain",maintainList);
        return new ModelAndView("query/workOrderStatistic");
    }

    @GetMapping("/date")
    List<String> workOrderDate(){
        return workOrderStatisticMapper.selectDate();
    }

    @GetMapping("/indicator")
    public List<String> indicator(){
        List<String> dateList=workOrderStatisticMapper.selectDate();
        List<String> datesList=new ArrayList<>();

        for(String date : dateList){
            if(workOrderStatisticMapper.existWorkOrderTable(date) !=null){
                datesList.add(date);

            }
        }
        Map<String,Object> condIndicator=new HashMap<>();
        condIndicator.put("dates",datesList);
        return workOrderStatisticMapper.selectIndicators(condIndicator);
    }

    @GetMapping("/maintain")
    List<String> workOrderMaintain(){
        List<String> dateList=workOrderStatisticMapper.selectDate();
        Map<String,Object> cond=new HashMap<>();
        List<String> dateResList=new ArrayList<>();
        for(String oneDate :dateList){
            if(workOrderStatisticMapper.existWorkOrderTable(oneDate) !=null){
                dateResList.add(oneDate);
            }
        }
        cond.put("dates",dateResList);
        List<String> maintainList=new ArrayList<>();
        maintainList=workOrderStatisticMapper.selectMaintain(cond);
        maintainList.removeIf(s -> s.trim().equals(""));
        return maintainList;
    }

    @PostMapping("/workOrderStatistic")
    Map<String,Object> calculateWorkOrderStatistic(HttpServletRequest request){
        String dates,maintains,indicators,statuses="";
        logger.debug("进入方法calculateWorkOrderStatistic.dates={},maintains={}",
                dates=request.getParameter("dateSelect"),
                maintains=request.getParameter("maintainSelect"),
                indicators=request.getParameter("indicatorSelect"),
                statuses=request.getParameter("statusSelect"));

        Page newPage = new Page();
        newPage.setPageSize(GsmConstant.linage);
        newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
        newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
        newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

        Map<String,Object> resultMap=new LinkedHashMap<>();

        List<Map<String,Object>> result=new ArrayList<>();
        List<String> dateList;
        List<String> maintainList=new ArrayList<>();
        List<String> indicatorList=new ArrayList<>();
        List<String> statusList=new ArrayList<>();
        List<String> dateResList=new ArrayList<>();
        Map<String,Object> cond=new HashMap<>();
        if(dates.equals("-1")){
            dateList=workOrderStatisticMapper.selectDate();
            for(String oneDate :dateList){
                if(workOrderStatisticMapper.existWorkOrderTable(oneDate) !=null){
                    dateResList.add(oneDate);
                }
            }
        }else{
            dateList= Arrays.asList(dates.split(","));
            for(String oneDate : dateList){
                if(workOrderStatisticMapper.existWorkOrderTable(oneDate) !=null){
                    dateResList.add(oneDate);
                }
            }
        }
        cond.put("dates",dateResList);
        List<String> counties=workOrderStatisticMapper.selectCounties(cond);
        if(maintains.equals("-1")){
            List<String> maintainsList=workOrderStatisticMapper.selectMaintain(cond);
            maintainsList.removeIf(s -> s.trim().equals(""));
            maintainList.addAll(maintainsList);
        }else {
            maintainList=Arrays.asList(maintains.split(","));
        }
        if(indicators.equals("-1")){
            indicatorList=workOrderStatisticMapper.selectIndicators(cond);
        }else{
            indicatorList=Arrays.asList(indicators.split(","));
        }
        if(statuses.equals("-1")){
            String[] statusArr={"受理中","待审核","申请挂起","已挂起","申请撤销挂起","完结","超时","已退回"};
            statusList=Arrays.asList(statusArr);
        }else if(statuses.contains("挂起")){
            for(String status :statuses.split(",")){
                if(status.equals("挂起")){
                    statusList.add("申请挂起");
                    statusList.add("已挂起");
                    statusList.add("申请撤销挂起");
                }else {
                    statusList.add(status);
                }
            }
        }else{
            statusList=Arrays.asList(statuses.split(","));
        }
        for(String county : counties){
            for(String maintain :maintainList){
                for(String indicator:indicatorList){
                    cond=new LinkedHashMap<>();
                    cond.put("dates",dateResList);
                    cond.put("indicator",indicator);
                    int total=(int)workOrderStatisticMapper.countWorkOrder(cond);
                    for(String status :statusList){
                        cond=new LinkedHashMap<>();
                        cond.put("dates",dateResList);
                        cond.put("county",county);
                        cond.put("maintain",maintain);
                        cond.put("indicator",indicator);
                        cond.put("status",status);
                        int one=(int)workOrderStatisticMapper.countWorkOrder(cond);
                        Map<String,Object> resOne=new LinkedHashMap<>();
                        resOne.put("县区",county);
                        resOne.put("代维",maintain);
                        resOne.put("工单类型",indicator);
                        resOne.put("工单状态",status);
                        resOne.put("数量",one);
                        resOne.put("总数",total);
                        if(total == 0){
                            resOne.put("占比","0.00%");
                        }else{
                            resOne.put("占比",(double)one/total);
                        }
                        result.add(resOne);
                    }
                }
            }
        }

        int totalCnt=newPage.getTotalCnt();
        if(totalCnt==-1){
            totalCnt=result.size();
            newPage.setTotalCnt(totalCnt);
        }
        int startIndex=newPage.calculateStart();
        int cnt=newPage.getPageSize();
        result=result.subList(startIndex ,startIndex+ cnt - 1 >= newPage.getTotalCnt() ? newPage.getTotalCnt() : startIndex + cnt - 1);

        newPage.setTotalPageCnt((int)totalCnt / newPage.getPageSize() + (totalCnt % newPage.getPageSize() == 0 ? 0 : 1));
        newPage.setForcedStartIndex(-1);
        resultMap.put("data",result);
        resultMap.put("page",newPage);
        logger.debug("统计结果---------------result={}",result);
        return resultMap;
    }
}
