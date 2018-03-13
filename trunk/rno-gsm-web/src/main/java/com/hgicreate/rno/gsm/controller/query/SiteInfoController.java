package com.hgicreate.rno.gsm.controller.query;

import com.hgicreate.rno.gsm.constant.GsmConstant;
import com.hgicreate.rno.gsm.mapper.query.SiteInfoMapper;
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
import java.util.*;

@RestController
@RequestMapping("/siteInfo")
public class SiteInfoController {

    private static final Logger logger = LoggerFactory.getLogger(SiteInfoController.class);

    private final SiteInfoMapper siteInfoMapper;

    public SiteInfoController(SiteInfoMapper siteInfoMapper){
        this.siteInfoMapper=siteInfoMapper;
    }

    @GetMapping("/page")
    ModelAndView index(Map<String,Object> model) {
        model.put("linage",GsmConstant.linage);
        return new ModelAndView("query/siteInfo");
    }

    @PostMapping("/byPage")
    Map<String, Object> querySiteInfoByPage(HttpServletRequest request) {

        logger.debug("querySiteInfoByPage.pageSize={},date={},time={},cell={}", request.getParameter("queryIndex"));

        Map<String, Object> result = new HashMap<String, Object>();

        Page newPage = new Page();
        newPage.setPageSize(GsmConstant.linage);
        newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
        newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
        newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

        String queryIndex=request.getParameter("queryIndex").toUpperCase();
        String cond=request.getParameter("cond");
        Map<String,Object> mapCond=prepareCond(cond,queryIndex);


        long totalCnt = newPage.getTotalCnt();
        if (totalCnt < 0) {
            totalCnt=siteInfoMapper.selectSiteInfoCount(mapCond);
            newPage.setTotalCnt((int) totalCnt);
        }
        int startIndex = newPage.calculateStart();
        int cnt = newPage.getPageSize();

        mapCond.put("startIndex", startIndex);
        mapCond.put("cnt", cnt);

        List<Map<String, Object>> res = siteInfoMapper.selectSiteInfoByPage(mapCond);

        newPage.setTotalPageCnt((int)totalCnt / newPage.getPageSize() + (totalCnt % newPage.getPageSize() == 0 ? 0 : 1));
        newPage.setForcedStartIndex(-1);
        result.put("page", newPage);
        result.put("data", res);
        return result;
    }

    @PostMapping("/exportData")
    void exportSiteInfo(HttpServletRequest request, HttpServletResponse resp){
        String queryIndex=request.getParameter("queryIndex").toUpperCase();
        String cond=request.getParameter("cond");
        Map<String,Object> mapCond=prepareCond(cond,queryIndex);
        String fileName = "站点信息.xlsx";
        try {
            fileName = new String("站点信息.xlsx".getBytes("UTF-8"), "iso-8859-1");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        resp.setContentType("application/x.ms-excel");
        resp.setHeader("Content-disposition", "attachment;filename=" + fileName);

        Map<String, List<Map<String, Object>>> mapRes = new LinkedHashMap<>();
        mapRes.put("sheet0",siteInfoMapper.selectSiteInfo(mapCond));
        ExcelFileTool.createExcel(resp,mapRes);
    }

    private Map<String,Object> prepareCond(String cond,String queryIndex){
        Map<String,Object> mapCond=new HashMap<>();
        if(queryIndex !=null && !queryIndex.equals("") ) {
            if (cond.equals("ObjectID")) {
                List<String> queryIndexList = Arrays.asList(queryIndex.split(","));
                mapCond.put("objectIDs", queryIndexList);
            }
            if (cond.equals("CGI")) {
                List<String> queryIndexList = Arrays.asList(queryIndex.split(","));
                mapCond.put("cgis", queryIndexList);
            }
            if (cond.equals("BSC")) {
                List<String> queryIndexList = Arrays.asList(queryIndex.split(","));
                mapCond.put("bscs", queryIndexList);
            }
        }
        return mapCond;
    }
}
