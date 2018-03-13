package com.hgicreate.rno.gsm.controller.query;

import com.hgicreate.rno.gsm.constant.GsmConstant;
import com.hgicreate.rno.gsm.mapper.query.FreqModeManageMapper;
import com.hgicreate.rno.gsm.model.Page;

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
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/freqModeManage")
public class FreqModeManageController {

    private static final Logger logger = LoggerFactory.getLogger(FreqModeManageController.class);

    private final FreqModeManageMapper freqModeManageMapper;

    public FreqModeManageController(FreqModeManageMapper freqModeManageMapper){
        this.freqModeManageMapper=freqModeManageMapper;
    }

    @GetMapping("/page")
    ModelAndView index(Map<String,Object> model){
        model.put("linage", GsmConstant.linage);
        return  new ModelAndView("query/freqModeManage");
    }

    @PostMapping("/byPage")
    Map<String, Object> queryFreqModeByPage(HttpServletRequest request) {
        logger.debug("queryFreqModeByPage.pageSize={}");

        Map<String, Object> result = new HashMap<String, Object>();

        Page newPage = new Page();
        newPage.setPageSize(GsmConstant.linage);
        newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
        newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
        newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

        Map<String,Object> mapCond=new HashMap<>();

        long totalCnt = newPage.getTotalCnt();
        if (totalCnt < 0) {
            totalCnt=freqModeManageMapper.selectFreqModeCount(mapCond);
            newPage.setTotalCnt((int) totalCnt);
        }
        int startIndex = newPage.calculateStart();
        int cnt = newPage.getPageSize();

        mapCond.put("startIndex", startIndex);
        mapCond.put("cnt", cnt);

        List<Map<String, Object>> res = freqModeManageMapper.selectFreqModeByPage(mapCond);

        newPage.setTotalPageCnt((int)totalCnt / newPage.getPageSize() + (totalCnt % newPage.getPageSize() == 0 ? 0 : 1));
        newPage.setForcedStartIndex(-1);
        result.put("page", newPage);
        result.put("data", res);
        return result;
    }

    @PostMapping("exportData")
    void exportFreqMode(HttpServletRequest request, HttpServletResponse resp){
        Map<String,Object> mapCond=new HashMap<>();
        String fileName = "频模管理.xlsx";
        try {
            fileName = new String("频模管理.xlsx".getBytes("UTF-8"), "iso-8859-1");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        resp.setContentType("application/x.ms-excel");
        resp.setHeader("Content-disposition", "attachment;filename=" + fileName);

        Map<String, List<Map<String, Object>>> mapRes = new LinkedHashMap<>();
        mapRes.put("sheet0",freqModeManageMapper.selectFreqMode(mapCond));
        ExcelFileTool.createExcel(resp,mapRes);
    }
}
