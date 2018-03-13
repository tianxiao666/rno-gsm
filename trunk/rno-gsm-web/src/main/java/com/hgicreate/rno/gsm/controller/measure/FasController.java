package com.hgicreate.rno.gsm.controller.measure;

import com.hgicreate.rno.gsm.mapper.measure.FasMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.measure.FasService;
import com.hgicreate.rno.gsm.tool.ExcelFileTool;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

@RestController
@RequestMapping("/fas")
public class FasController {

	private static final Logger logger = LoggerFactory.getLogger(FasController.class);

    private final FasMapper fasMapper;
    private  final FasService fasService;

    @Value("${rmo.gsm.linage:13}")
    private String linage;

    public FasController(FasMapper fasMapper, FasService fasService) {
        this.fasMapper = fasMapper;
        this.fasService = fasService;
    }
    
    @GetMapping("/page")
    ModelAndView index(Map<String, Object> model) {
    	model.put("fasDate", fasMapper.queryStsDate());
        model.put("fasBsc" , fasMapper.queryBscDate());
        model.put("fasCell" , fasMapper.queryCellData());
    	model.put("linage", Integer.parseInt(linage));
    	return new ModelAndView("measure/fasMeasure");
    }

    @GetMapping("/fasDate")
    List<String> queryAllDate() {return fasMapper.queryAllDate();}
    @GetMapping("/fasBsc")
    List<String> queryAllBsc() {return fasMapper.queryAllBsc();}
    @GetMapping("/fasCell")
    List<String> queryAllCell() {return fasMapper.queryAllCell();}

    @PostMapping("/queryFAS")
    Map<String, Object> queryFAS(HttpServletRequest request) {

        logger.debug("进入方法：queryFAS。pageSize={},date={},bsc={},cell={}",linage, request.getParameter("dateSelect"),request.getParameter("bscSelect"),request.getParameter("cellSelect"));

        Map<String, Object> result = new HashMap<String, Object>();

        Page newPage = new Page();
        newPage.setPageSize(Integer.parseInt(linage));
        newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
        newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
        newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

        Map<String, Object> cond = new HashMap<String, Object>();
        cond.put("fasDate", request.getParameter("dateSelect"));
        cond.put("fasBsc", request.getParameter("bscSelect"));
        cond.put("fasCell", request.getParameter("cellSelect"));

        List<Map<String, Object>> res = fasService.getFAS(cond, newPage);

        int totalCnt = newPage.getTotalCnt();
        newPage.setTotalPageCnt(totalCnt / newPage.getPageSize() + (totalCnt % newPage.getPageSize() == 0 ? 0 : 1));
        newPage.setForcedStartIndex(-1);
        result.put("page", newPage);

        result.put("data", res);
        return result;
    }

    @PostMapping("/getChart")
    Map<String, Object> getChart(HttpServletRequest request) {
        logger.debug("进入方法：getChart。date={},time={},cell={}",request.getParameter("date"),request.getParameter("time"),request.getParameter("cell"));
        Map<String, Object> chart = new HashMap<String, Object>();
        Map<String, Object> result = new HashMap<String, Object>();
        List<String> dateList = new ArrayList<>();
        dateList.add(request.getParameter("date"));
        List<String> timeList = new ArrayList<>();
        timeList.add(request.getParameter("time"));
        List<String> cellList = new ArrayList<>();
        cellList.add(request.getParameter("cell"));
        chart.put("fasDate",dateList );
        chart.put("fasTime", timeList);
        chart.put("fasCell", cellList);
        List<Map<String, Object>> resA = fasMapper.getChartA(chart);
        result.put("chartA", resA);
        List<Map<String, Object>> resB = fasMapper.getChartB(chart);
        result.put("chartB", resB);
        return result;
    }

    @PostMapping("/exportFAS")
    ModelAndView exportFAS(HttpServletRequest request,HttpServletResponse resp,Map<String, Object> model){
        logger.debug("exportFAS:"+"date={},bsc={},cell={}",request.getParameter("dateSelect"), request.getParameter("bscSelect"), request.getParameter("cellSelect"));
        String fileName = "FAS.xlsx";
        try {
            List<Map<String, Object>> result = fasService.exportFASData(request);
            Map<String, List<Map<String, Object>>> map = new LinkedHashMap<>();
            map.put("sheet1", result);
            fileName = new String("FAS.xlsx".getBytes("UTF-8"), "iso-8859-1");
            resp.setContentType("application/x.ms-excel");
            resp.setHeader("Content-disposition", "attachment;filename=" + fileName);
            ExcelFileTool.createExcel(resp, map);
            return null;
        } catch (Exception e) {
            model.put("message", "error");
            model.put("fasDate", fasMapper.queryStsDate());
            model.put("fasBsc" , fasMapper.queryBscDate());
            model.put("fasCell" , fasMapper.queryCellData());
            model.put("linage", Integer.parseInt(linage));
            return new ModelAndView("measure/FAS");
        }
    }
}

