package com.hgicreate.rno.gsm.controller.optimize;

import com.hgicreate.rno.gsm.constant.GsmConstant;
import com.hgicreate.rno.gsm.mapper.optimize.SpotInterModulationMapper;
import com.hgicreate.rno.gsm.model.Page;
import com.hgicreate.rno.gsm.service.optimize.SpotInterModulationService;
import com.hgicreate.rno.gsm.tool.ExcelFileTool;
import org.apache.poi.xssf.usermodel.*;
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
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.util.*;


@RestController
@RequestMapping("/spotInterModulation")
public class SpotInterModulationController {

    private static final Logger logger = LoggerFactory.getLogger(SpotInterModulationController.class);

    private final SpotInterModulationMapper spotInterModulationMapper;

    private final SpotInterModulationService spotInterModulationService;

    private List<Map<String, Object>> list;


    public SpotInterModulationController(SpotInterModulationMapper spotInterModulationMapper, SpotInterModulationService spotInterModulationService) {
        this.spotInterModulationMapper = spotInterModulationMapper;
        this.spotInterModulationService = spotInterModulationService;
    }

    @GetMapping("/spotInterModulationPage")
    ModelAndView index(Map<String, Object> map) {
        map.put("dates", spotInterModulationMapper.querySpotDate());
        map.put("bscs", spotInterModulationMapper.querySpotBsc());
        map.put("cells", spotInterModulationMapper.queryTop5Cell());
        map.put("linage", GsmConstant.linage);
        return new ModelAndView("optimize/spotInterModulation");
    }

    @GetMapping("/spotInterModulationBsc")
    List<String> spotInterModulationBsc() {
        return spotInterModulationMapper.querySpotBsc();
    }

    @GetMapping("/spotInterModulationCell")
    List<String> spotInterModulationCell() {
        return spotInterModulationMapper.queryCellOnclick();
    }

    @PostMapping("/calculateSpotInterModulation")
    Map<String, Object> calculateSpotInterModulation(HttpServletRequest request) {
        logger.debug("calculateSpotInterModulationByPage.pageSize={},date={},bsc={},cell={}",  request.getParameter("dateSelect"),
                request.getParameter("bscSelect"), request.getParameter("cellSelect"));
        List<Map<String,Object>> onResult = new ArrayList<>();
        Map<String, Object> oneResult = new HashMap<String, Object>();
        Page newPage = new Page();
        newPage.setPageSize(GsmConstant.linage);
        newPage.setCurrentPage(Integer.parseInt(request.getParameter("hiddenCurrentPage")));
        newPage.setTotalCnt(Integer.parseInt(request.getParameter("hiddenTotalCnt")));
        newPage.setTotalPageCnt(Integer.parseInt(request.getParameter("hiddenTotalPageCnt")));

        String date = request.getParameter("dateSelect");
        String cellSelect = request.getParameter("cellSelect");
        String bscSelect=request.getParameter("bscSelect");
        List<String> bscList=new ArrayList<>();
        List<String> cellList = new ArrayList<>();
        Map<String, Object> cond = new HashMap<String, Object>();
        cond.put("dates",date);
        if(cellSelect.equals("-1") || cellSelect.trim().equals("")){
            List<String> cellAll=spotInterModulationMapper.queryCellOnclick();
            cellList.addAll(cellAll);
        }else {
            if (cellSelect.split(",").length == 1) {
                cellList.add(cellSelect);
            } else {
                cellList = Arrays.asList(cellSelect.split(","));
            }
        }
        cond.put("cells",cellList);
        if(bscSelect.equals("-1") || bscSelect.trim().equals("")){
            List<String> bscAll=spotInterModulationMapper.querySpotBsc();
            bscList.addAll(bscAll);
        }else{
            if (bscSelect.split(",").length == 1) {
                bscList.add(bscSelect);
            } else {
                bscList = Arrays.asList(bscSelect.split(","));
            }
        }
        cond.put("bscs",bscList);
        if(request.getParameter("flag") ==null) {
            for (String cell : cellList) {
                Map<String, Object> one = spotInterModulationService.cycleCalculateSpotModulation(date, cell);
                if (one != null) {
                    onResult.add(one);
                }
            }
            if(spotInterModulationMapper.existTempTable()!=null){
                spotInterModulationMapper.dropTempTable();
                spotInterModulationMapper.createNewTable();
            }else{
                spotInterModulationMapper.createNewTable();
            }
            for (int i = 0; i < onResult.size(); i++) {
                List<String> spotItem = new ArrayList<>();
                spotItem.add(onResult.get(i).get("日期").toString());
                spotItem.add(onResult.get(i).get("网元").toString());
                spotItem.add(onResult.get(i).get("小区").toString());
                spotItem.add(onResult.get(i).get("频点1").toString());
                spotItem.add(onResult.get(i).get("频点2").toString());
                spotItem.add(onResult.get(i).get("受扰频点").toString());
                spotItem.add(onResult.get(i).get("干扰类型").toString());
                spotInterModulationMapper.insertToSpotInterModule(spotItem);
            }
        }
        List<Map<String, Object>> res=spotInterModulationService.querySpotInterModulationByPage(cond,newPage);
        int totalCnt=newPage.getTotalCnt();
        newPage.calculateStart();
        newPage.setTotalPageCnt(totalCnt / newPage.getPageSize() + (totalCnt % newPage.getPageSize() == 0 ? 0 : 1));
        newPage.setForcedStartIndex(-1);
        oneResult.put("page", newPage);
        oneResult.put("oneResult", res);

        return oneResult;
    }

    @PostMapping("/exportSpotInterModulationData")
    void exportSpotInterModulationData(HttpServletRequest request) {
        //查询数据库中所有的数据
        list = queryExportSpotInterModulation(request);
    }

    @GetMapping("/exportSpotInterModulation")
    void exportSpotInterModulation(HttpServletRequest request, HttpServletResponse resp) throws Exception {
        logger.debug("进入方法exportSpotInterModulation: " + "date={},bsc={},cell={}", request.getParameter("date"),
                request.getParameter("bsc"), request.getParameter("cell"));
        String fileName = "频点互调.xlsx";
        try {
            fileName = new String("频点互调.xlsx".getBytes("UTF-8"), "iso-8859-1");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        resp.setContentType("application/x.ms-excel");
        resp.setHeader("Content-disposition", "attachment;filename="+fileName);
        Map<String,List<Map<String,Object>>> data=new HashMap<>();
        data.put("sheet0",list);
        ExcelFileTool.createExcel(resp,data);

    }

    private List<Map<String, Object>> queryExportSpotInterModulation(HttpServletRequest request) {
        List<Map<String,Object>> onResult = new ArrayList<>();
        String date=request.getParameter("date");
        String bsc=request.getParameter("bsc");
        String cells=request.getParameter("cell");
        List<String> cellList=new ArrayList<>();
        if(cells.equals("-1")){
            List<String> cellAll=spotInterModulationMapper.queryCellOnclick();
            cellList.addAll(cellAll);
        }
        if(cells.split(",").length==1){
            cellList.add(cells);
        }else{
            cellList= Arrays.asList(cells.split(","));
        }
        for(String cell:cellList){
            Map<String, Object> one = spotInterModulationService.cycleCalculateSpotModulation(date, cell);
            if(one !=null){
                onResult.add(one);
            }
        }
        logger.debug("onResult={}", onResult);
        return onResult;
    }
}
