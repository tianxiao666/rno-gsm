package com.hgicreate.rno.gsm.controller.query;

import com.hgicreate.rno.gsm.constant.GsmConstant;
import com.hgicreate.rno.gsm.mapper.query.WorkOrderClosedCycleMapper;
import com.hgicreate.rno.gsm.model.Auth;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.model.User;
import com.hgicreate.rno.gsm.repo.AuthRepository;
import com.hgicreate.rno.gsm.repo.UserRepository;
import com.hgicreate.rno.gsm.service.query.WorkOrderClosedCycleService;
import com.hgicreate.rno.gsm.service.usermanage.UserService;
import com.hgicreate.rno.gsm.tool.ExcelFileTool;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.UnsupportedEncodingException;
import java.security.Principal;
import java.util.*;

@RestController
@RequestMapping("/workOrderClosedCycle")
public class WorkOrderClosedCycleController {

    private static final Logger logger = LoggerFactory.getLogger(WorkOrderClosedCycleController.class);

    private WorkOrderClosedCycleMapper workOrderClosedCycleMapper;

    private WorkOrderClosedCycleService workOrderClosedCycleService;

    private AuthRepository authRepository;

    private UserRepository userRepository;

    private UserService userService;

    public WorkOrderClosedCycleController(WorkOrderClosedCycleMapper workOrderClosedCycleMapper,
                                          WorkOrderClosedCycleService workOrderClosedCycleService,
                                          AuthRepository authRepository,
                                          UserRepository userRepository,
                                          UserService userService){
        this.workOrderClosedCycleMapper=workOrderClosedCycleMapper;
        this.workOrderClosedCycleService=workOrderClosedCycleService;
        this.authRepository=authRepository;
        this.userRepository=userRepository;
        this.userService=userService;
    }

    @GetMapping("/page")
    public ModelAndView page(Map<String,Object> model, HttpSession session, Principal principal){
        if (null == session.getAttribute("user")) {
            // 获取用户对象
            String username = principal.getName();
            User user = userService.getUser(username);
            logger.info("在 Session 中添加用户：" + user);
            session.setAttribute("user", user);
        }
        List<String> dateShowList=workOrderClosedCycleMapper.selectTop5Date();
        model.put("date",dateShowList);
        List<String> dateList=workOrderClosedCycleMapper.selectDate();
        List<String> datesList=new ArrayList<>();

        for(String date : dateList){
            if(workOrderClosedCycleMapper.existWorkOrderTable(date) !=null){
                datesList.add(date);
            }
        }
        Map<String,Object> condIndicator=new HashMap<>();
        condIndicator.put("dates",datesList);
        model.put("indicator",workOrderClosedCycleMapper.selectIndicators(condIndicator));
        model.put("cell",workOrderClosedCycleMapper.selectTop5Cell(condIndicator));
        Map<String,Object> dateMap=new HashMap<>();
        dateMap.put("dates",datesList);
        workOrderClosedCycleMapper.insertWorkOrder(dateMap);
        //更新超过三天未处理的工单状态为超时
        workOrderClosedCycleMapper.updateOverTime(dateMap);
        List<Auth> authList=authRepository.findByAuthorityEquals("ROLE_USER");
        List<String> usernameList=new ArrayList<>();
        for(Auth auth:authList){
            usernameList.add(auth.getUsername());
        }
        List<String> chineseNameList=new ArrayList<>();
        for(String username:usernameList){
            if(userRepository.findByUsername(username).getChineseName()!=null){
                chineseNameList.add(userRepository.findByUsername(username).getChineseName());
            }
        }
        //将工单分配给不同代维的负责人
        for(String chineseName:chineseNameList){
            Map<String,Object> handlerMap=new HashMap<>();
            handlerMap.put("handler",chineseName);
            handlerMap.put("maintain",userRepository.findByChineseName(chineseName).getUnit());
            handlerMap.put("dates",datesList);
            workOrderClosedCycleMapper.updateWorkOrderHandler(handlerMap);
        }

        logger.debug("model中有--------------------------"+model);
        return new ModelAndView("query/workOrderClosedCycle");
    }

    @GetMapping("/date")
    public List<String> date(){
        return workOrderClosedCycleMapper.selectDate();
    }

    @GetMapping("/indicator")
    public List<String> indicator(){
        List<String> dateList=workOrderClosedCycleMapper.selectDate();
        List<String> datesList=new ArrayList<>();
        for(String date : dateList){
            if(workOrderClosedCycleMapper.existWorkOrderTable(date) !=null){
                datesList.add(date);
            }
        }
        Map<String,Object> condIndicator=new HashMap<>();
        condIndicator.put("dates",datesList);
        return workOrderClosedCycleMapper.selectIndicators(condIndicator);
    }

    @GetMapping("/cell")
    public List<String> getCell(){
        return workOrderClosedCycleMapper.selectCell();
    }

    @PostMapping("/getEvaluateData")
    Map<String,Object> getEvaluateData(HttpServletRequest request){
        String dates,indicators="";
        logger.debug("进入统计信息方法request={}",dates=request.getParameter("dateSelect").trim(),
                indicators=request.getParameter("indicatorSelect").trim());
        Map<String,Object> model=new LinkedHashMap<>();
        List<String> dateList=workOrderClosedCycleMapper.selectDate();
        List<String> indicatorList=new ArrayList<>();
        List<String> datesList=new ArrayList<>();
        for(String date : dateList){
            if(workOrderClosedCycleMapper.existWorkOrderTable(date) !=null){
                datesList.add(date);
            }
        }
        List<String> dateFinalList=new ArrayList<>();
        for(String date : dates.split(",")){
            if(datesList.contains(date)){
                dateFinalList.add(date);
            }
        }
        Map<String,Object> condIndic=new HashMap<>();
        condIndic.put("dates",dateFinalList);
        indicatorList=workOrderClosedCycleMapper.selectIndicators(condIndic);
        List<String> indicatorFinalList=new ArrayList<>();
        if(indicators.equals("-1")||indicators.equals("")){
            indicatorFinalList=indicatorList;
        }else{
            for(String indicator: indicators.split(",")){
                if(indicatorList.contains(indicator)){
                    indicatorFinalList.add(indicator);
                }
            }
        }
        model.put("indicatorStatistic",indicatorFinalList);
        Map<String,Object> cond;
        String[] handleResultArr={"全部","完结","超时"};
        for(String handleResult : handleResultArr){
            if(handleResult.equals("全部")){
                cond=new LinkedHashMap<>();
                cond.put("dates",dateFinalList);
                for(String indicator :indicatorFinalList){
                    cond.put("indicator",indicator);
                    int indicatorCnt0=(int)workOrderClosedCycleMapper.statisticCount(cond);
                    model.put("a"+indicatorFinalList.indexOf(indicator),indicatorCnt0);
                }
            }else{
                cond=new LinkedHashMap<>();
                cond.put("dates",dateFinalList);
                cond.put("status",handleResult);

                for(String indicator :indicatorFinalList){
                    cond.put("indicator",indicator);
                    int indicatorCnt1=(int)workOrderClosedCycleMapper.statisticCount(cond);
                    if(handleResult.equals("完结")){
                        model.put("f"+indicatorFinalList.indexOf(indicator),indicatorCnt1);
                    }else{
                        model.put("o"+indicatorFinalList.indexOf(indicator),indicatorCnt1);
                    }
                }
            }
        }
        return model;
    }

    @GetMapping("/getAdministrator")
    public List<String> getAdministrator(){
        String authority="ROLE_ADMIN";
        List<Auth> authList=authRepository.findByAuthorityEquals(authority);
        List<String> userNameList=new ArrayList<>();
        for(Auth auth :authList){
            userNameList.add(auth.getUsername());
        }
        List<String> chineseNameList=new ArrayList<>();
        for(String userName : userNameList){
            User user=userRepository.findByUsername(userName);
            chineseNameList.add(user.getChineseName());
        }
        logger.debug("管理员中文名集合为--------------chineseNameList={}"+chineseNameList);
        return chineseNameList;
    }

    @GetMapping("/getNormalUser")
    public List<String> getNormalUser(){
        String authority="ROLE_USER";
        List<Auth> authList=authRepository.findByAuthorityEquals(authority);
        List<String> userNameList=new ArrayList<>();
        for(Auth auth :authList){
            userNameList.add(auth.getUsername());
        }
        List<String> chineseNameList=new ArrayList<>();
        for(String userName : userNameList){
            User user=userRepository.findByUsername(userName);
            chineseNameList.add(user.getChineseName());
        }
        logger.debug("普通用户中文名集合为--------------chineseNameList={}"+chineseNameList);
        return chineseNameList;
    }

    @PostMapping("/workOrderCycleByPage")
    Map<String,Object> queryWorkOrderByPage(HttpServletRequest request){
        Map<String,Object> cond=prepareCond(request);
        Map<String,Object> result=new LinkedHashMap<>();
        Page newPage = new Page();
        newPage.setPageSize(GsmConstant.linage);
        newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
        newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
        newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

        List<Map<String, Object>> res =workOrderClosedCycleService.queryWorkOrderByPage(cond,newPage);

        int totalCnt = newPage.getTotalCnt();
        newPage.setTotalPageCnt(totalCnt / newPage.getPageSize() + (totalCnt % newPage.getPageSize() == 0 ? 0 : 1));
        newPage.setForcedStartIndex(-1);
        result.put("page", newPage);
        result.put("data", res);
        logger.debug("工单查询-----------------------res={}"+res);
        return result;
    }

    @PostMapping("/updateWorkOrderById")
    public void updateWorkOrderById(HttpServletRequest request){

        String orderId,date,handler,handleMethod,handleResult,handleCount,status,admin="";
        logger.debug("进入方法updateWorkOrderById",orderId=request.getParameter("order"),
                date=request.getParameter("date"),
                handler=request.getParameter("handler"),
                handleMethod=request.getParameter("handleMethod"),
                handleResult=request.getParameter("handleResult"),
                handleCount=request.getParameter("handleCount"),
                status=request.getParameter("status"),
                admin=request.getParameter("admin"));
        Integer treatCnt=Integer.parseInt(handleCount);
        if(handleResult.trim().equals("已完成") && status.equals("超时")){
            status="待审核";
        }
        if(workOrderClosedCycleMapper.ifExitsThisOrder(orderId)>0){
            workOrderClosedCycleMapper.updateWorkOrderReview(orderId,handler,handleMethod,handleResult,treatCnt.toString(),status,admin);
            workOrderClosedCycleMapper.updateWorkOrderDate(orderId,date,handler,handleMethod);
        }else{
            workOrderClosedCycleMapper.insertWorkOrderReview(orderId,handler,handleMethod,handleResult,treatCnt.toString(),status,admin);
        }
    }

    @PostMapping("/hangUp")
     void hangUpById(HttpServletRequest request){
        String orderId,date,handler,handleMethod,handleResult,status,admin="";
        logger.debug("进入方法updateWorkOrderById",orderId=request.getParameter("order"),
                date=request.getParameter("date"),
                handler=request.getParameter("handler"),
                handleMethod=request.getParameter("handleMethod"),
                handleResult=request.getParameter("hadleResult"),
                status=request.getParameter("status"),
                admin=request.getParameter("admin"));
        if(workOrderClosedCycleMapper.ifExitsThisOrder(orderId)>0){
            workOrderClosedCycleMapper.updateHangUpWorkOrder(orderId,handler,handleMethod,handleResult,status,admin);
        }else{
            workOrderClosedCycleMapper.insertHangUpWorkOrder(orderId,handler,handleMethod,handleResult,status,admin);
        }
    }

    @PostMapping("/updateWorkOrderStatusByIdByAdmin")
    void updateWorkOrderStatusByIdByAdmin(HttpServletRequest request){
         String order,status,handler="";
         logger.debug("进入方法updateWorkOrderStatusByIdByAdmin",order=request.getParameter("order"),
                 status=request.getParameter("status"),
                 handler=request.getParameter("handler"));

         workOrderClosedCycleMapper.updateWorkOrderStatusById(order,status,handler);
    }

    @PostMapping("/giveBackOrder")
    void giveBackOrder(HttpServletRequest request){
        String order,status,handler,handleCount="";
        logger.debug("进入方法updateWorkOrderStatusByIdByAdmin",order=request.getParameter("order"),
                status=request.getParameter("status"),
                handler=request.getParameter("handler"),
                handleCount=request.getParameter("handleCount"));
        Integer cnt=Integer.parseInt(handleCount)+1;
        workOrderClosedCycleMapper.giveBackOrder(order,status,handler,cnt.toString());
    }

    private Map<String,Object> prepareCond(HttpServletRequest request){
        String order,dates,cells,indicators,chineseName,statuses="";
        logger.debug("prepareCond.order={},dates={}," +
                        "indicators={},status={},unit={}",order=request.getParameter("workOrderNum"),
                dates=request.getParameter("dateSelect"),
                cells=request.getParameter("cellSelect"),
                indicators=request.getParameter("indicatorSelect"),
                chineseName=request.getParameter("chineseName").trim(),
                statuses=request.getParameter("statusSelect"));

        Map<String,Object> cond=new LinkedHashMap<>();
        if(!order.trim().equals("")){
            cond.put("order",order);
        }
        if(!cells.trim().equals("")){
            cond.put("cells",cells.split(","));
        }
        if(!dates.trim().equals("-1")){
            List<String> datelist=new ArrayList<>();
            for(String date:dates.split(",")){
                if(workOrderClosedCycleMapper.existWorkOrderTable(date)!=null){
                    datelist.add(date);
                }
            }
            cond.put("dates", datelist);
        }else{
            List<String> dateslist=workOrderClosedCycleMapper.selectDate();
            List<String> datelist=new ArrayList<>();
            for(String date : dateslist){
                if(workOrderClosedCycleMapper.existWorkOrderTable(date)!=null){
                    datelist.add(date);
                }
            }
            cond.put("dates",datelist);
        }
        if(chineseName!=null && !chineseName.equals("")  ){
            String username=userRepository.findByChineseName(chineseName).getUsername();
            if(authRepository.findByUsernameEquals(username).getAuthority().equals("ROLE_ADMIN")){
                cond.put("maintains",null);
            }else{
                String maintain= userRepository.findByChineseName(chineseName).getUnit();
                List<String> maintainList=new ArrayList<>();
                maintainList.addAll(Arrays.asList(maintain.split(",")));
                cond.put("maintains",maintainList);
            }

        }

        if(!indicators.trim().equals("-1")){
            cond.put("indicators",Arrays.asList(indicators.split(",")));
        }
        List<String> statusList=new ArrayList<>();
        if(statuses.equals("-1")){
            String[] statusArr={"受理中","待审核","申请挂起","已挂起","申请撤销挂起","完结","超时","已退回"};
            statusList=Arrays.asList(statusArr);
        }else if(statuses.contains("挂起")){
            for(String status :statuses.split(",")){
                if(status.equals("挂起")){
                    statusList.add("申请挂起");
                    statusList.add("已挂起");
                    statusList.add("申请撤销挂起");
                }
                statusList.add(status);

            }
        }else{
            statusList=Arrays.asList(statuses.split(","));
        }
        if(statusList.contains("受理中")){
            cond.put("stat","受理中");
        }
        cond.put("statuses",statusList);

        return cond;
    }

    @PostMapping("exportWorkOrder")
    void exportWorkOrder(HttpServletRequest request, HttpServletResponse response){
        Map<String,Object> cond=prepareCond(request);
        String fileName = "工单.xlsx";
        try {
            fileName = new String(fileName.getBytes("UTF-8"), "iso-8859-1");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } // 为了解决中文名称乱码问题

        response.setContentType("application/x.ms-excel");
        response.setHeader("Content-disposition", "attachment;filename=" + fileName);
        List<Map<String, Object>> res;
        if (cond.get("maintains") == null) {
            res=workOrderClosedCycleMapper.selectWorkOrderAdmin(cond);
        }else{
            res=workOrderClosedCycleMapper.selectWorkOrderUser(cond);
        }
        Map<String,List<Map<String, Object>>> result=new LinkedHashMap<>();
        result.put("工单",res);
        ExcelFileTool.createExcel(response,result);
    }

}
