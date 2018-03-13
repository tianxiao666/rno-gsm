package com.hgicreate.rno.gsm.app.controller;

import com.hgicreate.rno.gsm.app.mapper.WorkOrderProcessMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class WorkOrderProcessController {

    private static final Logger logger = LoggerFactory.getLogger(WorkOrderProcessController.class);

    @Value("${rno.gsm.app.linage:25}")
    private String linage;

    private WorkOrderProcessMapper workOrderProcessMapper;

    public WorkOrderProcessController(WorkOrderProcessMapper workOrderProcessMapper){
        this.workOrderProcessMapper=workOrderProcessMapper;
    }

    /**
     * 获取工单列表
     */
    @GetMapping("/getWorkOrder")
    List<Map<String, Object>> getWorkOrder(HttpServletRequest request) {
        String subMaintain, index, cell, chinese, beginTime, endTime, start = "";
        logger.debug("进入getWorkOrder方法，代维={}，指标={}，CELL={}，中文名={}，开始时间={}，结束时间={}，开始索引={}",
                subMaintain = request.getParameter("maintain"), index = request.getParameter("indicator"),
                cell = request.getParameter("cell").trim().replace("，", ",").toUpperCase(),
                chinese = request.getParameter("chinese").trim().replace("，", ",").toUpperCase(),
                beginTime = request.getParameter("beginTime").substring(0,10).replace("-",""),
                endTime = request.getParameter("endTime").substring(0,10).replace("-",""),
                start = request.getParameter("start"));

        Map<String, Object> map = new HashMap<>();
        map.put("subMaintain", subMaintain);
        map.put("indexName", index);
        map.put("cells", cell == "" ? null : cell.split(","));
        map.put("chinese", chinese == "" ? null : chinese.split(","));
        map.put("beginTime", beginTime);
        map.put("endTime", endTime);
        map.put("start", start);
        map.put("num", linage);
        return workOrderProcessMapper.getWorkOrder(map);
    }

    @GetMapping("getDetailById")
    Map<String, Object> getDetailById(HttpServletRequest request) {
        String id = "";
        logger.debug("进入getDetailById方法，工单={}", id = request.getParameter("workOrderId"));
        return workOrderProcessMapper.getDetailById(id);
    }

    /**
     * 保存审批信息
     */
    @GetMapping("/saveResultById")
    boolean saveResultById(HttpServletRequest request) {
        String id, handler, treatment,treatResult = "";
        logger.debug("进入saveResultById方法，工单={},处理人={}，处理方法={},处理结果={}", id = request.getParameter("workOrderId"),
                handler = request.getParameter("handler"), treatment = request.getParameter("treatment"),
                treatResult=request.getParameter("treatResult"));

        try {
            if (workOrderProcessMapper.ifExitsThisOrder(id) > 0) {
                workOrderProcessMapper.updateReviewTab(id, handler, treatment,treatResult);
            } else {
                workOrderProcessMapper.insertReviewTab(id, handler, treatment,treatResult);
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
